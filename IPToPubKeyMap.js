class IPAddrPublicKeyMap {
  constructor() {
    this.publicKeyToEncryptedIP = {};
  }

  set(encryptedIP, publicKey) {
    this.deleteByPublicKey(publicKey);
    this.publicKeyToEncryptedIP[publicKey] = encryptedIP;
  }


  getEncryptedIPByPublicKey(publicKey) {
    return this.publicKeyToEncryptedIP[publicKey];
  }

  deleteByPublicKey(publicKey) {
    const encryptedIP = this.publicKeyToEncryptedIP[publicKey];
    if (encryptedIP) {
      delete this.publicKeyToEncryptedIP[publicKey];
    }
  }
}

module.exports = { IPAddrPublicKeyMap };
