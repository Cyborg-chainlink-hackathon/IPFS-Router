const express = require("express");
const router = express.Router();
const { getIPFromStorage, storeData } = require("./IPFSLinker");

router.post("/decrypt", async (req, res) => {
  const publicKey = req.body.key;
  console.log("publicKey:  ,", publicKey);
  const IPAddr = await getIPFromStorage(publicKey);
  if (IPAddr) {
    console.log("Ip address found: ", IPAddr);
    res.status(201);
  } else {
    console.log("Invalid Input");
    res.status(400);
  }
  res.send({ worker_ipaddress: IPAddr });
});


router.post("/register-worker", async (req, res) => {
  const IPAddr = req.body.ip;
  const pubKey = req.body.pubKey;
  const retVal = await storeData(IPAddr, pubKey);
  console.log(retVal);

  if (retVal == true) {
    console.log("Successfully Stored in IPFS");
    res.status(201);
  } else {
    console.log("Failed storing in IPFS");
    res.status(400);
  }
  res.send();
});



module.exports = router;
