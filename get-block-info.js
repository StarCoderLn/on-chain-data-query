import fs from 'fs';
import path from 'path';
import { ethers } from "ethers";
import 'dotenv/config';

const provider = new ethers.JsonRpcProvider(
  `${process.env.OP_API}${process.env.API_KEY}`
);

const getBlockInfo = async (blockNumber) => {
  try {
    const blockInfo = await provider.getBlock(blockNumber, true);

    const destination = "./Results";
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }
    const filePath = path.join(destination, `OP_Block_${blockNumber}.txt`);

    fs.writeFileSync(filePath, JSON.stringify(blockInfo, null, 2));

    console.log(`BlockInfo saved to ${filePath}`);
  } catch (error) {
    console.error("Error tracing transaction:", error);
  }
};

getBlockInfo(137489772);
// getBlockInfo("latest")
