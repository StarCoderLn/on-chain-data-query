import { ethers } from "ethers";
import 'dotenv/config';

const provider = new ethers.JsonRpcProvider(
  `${process.env.OP_API}${process.env.API_KEY}`
);

provider
  .getBlockNumber()
  // .getBlock(137489772)
  // .getTransaction('0x619a1affa24710ba51b7b24ba2407af9ed8a325ea9c9264b870a76b1cff5fb94')
  // .getBalance("0xa5c9C09E61bc46EB4fF6277764109c87215200a7")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
