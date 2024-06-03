const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { initialiseIPFSData } = require("./IPFSLinker");
const router = require("./router");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, async () => {
  await initialiseIPFSData();
  console.log(`Express server listening at http://localhost:${port}`);
});