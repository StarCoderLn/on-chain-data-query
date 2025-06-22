import fs from 'fs';
import path from 'path';
import { ethers } from "ethers";
import 'dotenv/config';

const provider = new ethers.JsonRpcProvider(
  `${process.env.OP_API}${process.env.API_KEY}`
);

const getTransactionInfo = async (transactionHash) => {
  try {
    const txInfo = await provider.getTransactionReceipt(transactionHash);

    const destination = "./Results";
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }
    const filePath = path.join(destination, `OP_Transaction_${transactionHash}.txt`);

    fs.writeFileSync(filePath, JSON.stringify(txInfo, null, 2));

    console.log(`Transaction log saved to ${filePath}`);
  } catch (error) {
    console.error("Error calling transaction:", error);
  }
};

getTransactionInfo(
  "0x619a1affa24710ba51b7b24ba2407af9ed8a325ea9c9264b870a76b1cff5fb94"
);
