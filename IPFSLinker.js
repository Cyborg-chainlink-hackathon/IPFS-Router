const { encrypt, decrypt } = require("./encryption");
const { ThirdwebStorage } = require("@thirdweb-dev/storage");
let { IPAddrPublicKeyMap } = require("./IPToPubKeyMap");
const { readFromFile, writeToFile } = require("./fileDataHandler");
require("dotenv").config();
const keyHex = process.env.SECRET_ENCRYPTION_KEY;
const storage = new ThirdwebStorage({
  secretKey:
    "qUwWjFyJjii8w08nPk3Te4qdlW3U1efuIfqzhvYpAOhBJHcFEHQtypdRFZ5xLs0yDKz1C9NE7ei8awk4SI31NQ",
});
let ipToPublicKeyMap = new IPAddrPublicKeyMap();
let uri;

const initialiseIPFSData = async () => {
  try {
    const backupUri = readFromFile();
    if (backupUri) {
      uri = backupUri;
    } else {
      uri = await storage.upload(ipToPublicKeyMap);
      writeToFile(uri);
    }
  } catch (error) {
    console.error("Error initializing the uri:", error);
    uri = await storage.upload(ipToPublicKeyMap);
    writeToFile(uri);
  }
};

const storeData = async (phNum, pubkey) => {
  pubkey = pubkey.toLowerCase();
  let data = await storage.downloadJSON(uri);

  ipToPublicKeyMap.publicKeyToEncryptedIP = data.publicKeyToEncryptedIP;

  let encryptedIP = encrypt(phNum, keyHex);
  ipToPublicKeyMap.set(encryptedIP, pubkey);
  uri = await storage.upload(ipToPublicKeyMap);
  writeToFile(uri);
  return true;
};

const getIPFromStorage = async (pubKey) => {
  pubKey = pubKey.toLowerCase();
  let data = await storage.downloadJSON(readFromFile());
  console.log(data);
  const val = data?.publicKeyToEncryptedIP?.[pubKey] ?? null;
  if (val) {
    return decrypt(val, keyHex);
  }
  return false;
};

module.exports = {
  storeData,
  getIPFromStorage,
  initialiseIPFSData,
};


/*
client-id: ef56dc8d3458b19b35ede4f6b8b2c5c9
secret: qUwWjFyJjii8w08nPk3Te4qdlW3U1efuIfqzhvYpAOhBJHcFEHQtypdRFZ5xLs0yDKz1C9NE7ei8awk4SI31NQ
*/