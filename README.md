# IPFS-Router

The IPFS-Router project is designed to create a decentralized and secure system for mapping public keys to IP addresses using IPFS (InterPlanetary File System) for storage and retrieval. This system ensures the privacy and security of IP addresses by encrypting them before storing them on IPFS. Below various scripts and directories are organized to handle encryption, data storage, and retrieval efficiently, providing a robust and secure solution for managing network address mappings. Below is a detailed overview of the functionalities and structure of the project:


## Installation & Exceution
To set up the IPFS-Router project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Cyborg-chainlink-hackathon/IPFS-Router.git
   cd IPFS-Router
2. Install the dependencies:
    ```
    npm install
    ```
3. Usage
After installation, you can start using the IPFS-Router functionalities.
    ```
    1. set SECRET_ENCRYPTION_KEY in the environment file
    2. node main.js
    ```

## Functionalities

- **IPFSLinker.js**
Purpose: This script handles the saving of encrypted mappings (public keys to IP addresses) to IPFS and retrieves their hashes.
Functionality: It ensures that the encrypted mappings are stored on IPFS securely and provides the capability to retrieve these mappings using their IPFS hashes.

- **IPToPubKeyMap.js**
Purpose: Maps encrypted IP addresses to public keys using a custom-defined structure.
Functionality: Facilitates a decentralized and secure association of network addresses with encryption keys, enhancing the security of the network.

- **encryption.js**
Purpose: Provides utilities for encrypting and decrypting IP addresses.
Functionality: Ensures the data stored or transmitted over IPFS is encrypted, maintaining the confidentiality and integrity of the data.

- **fileDataHandler.js**
Purpose: Handles file operations such as reading from and writing to IPFS files.
Functionality: Manages file data and interacts with IPFS to read and write encrypted mappings.

- **ipfsData/**
Purpose: Directory to keep track of IPFS file hashes.
Functionality: Stores the hashes generated every time data is updated in IPFS, maintaining a record of all changes.

- **main.js**
Purpose: Main entry point for the project.
Functionality: Initializes the IPFS node, sets up necessary configurations, and starts the express server to handle incoming requests.

- **router.js**
Purpose: Contains the routing logic for handling different requests.
Functionality: Defines routes to store the encrypted mapping of IP addresses to public keys and provides decryption functionality by accepting the public key as an input.

## Project Structure
The project structure is as follows:
IPFS-Router/
├── IPFSLinker.js
├── IPToPubKeyMap.js
├── README.md
├── encryption.js
├── fileDataHandler.js
├── ipfsData/
├── main.js
├── package-lock.json
├── package.json
└── router.js