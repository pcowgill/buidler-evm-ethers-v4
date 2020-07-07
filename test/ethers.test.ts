import { ethers } from "@nomiclabs/buidler";
import { Signer } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
provider.pollingInterval = 50;

describe("ethers", () => {
  let accounts: Signer[];
  let wallet: any;

  beforeEach(async () => {
    accounts = await ethers.getSigners();
    [wallet] = accounts; // let's not worry about where this came from for this example
    wallet = wallet.connect(provider);
  });


  it.only("should get balance of wallet", async () => {
    let randomWallet = ethers.Wallet.createRandom();
    
    const walletBalance = await wallet.getBalance();
    console.log({ walletBalance })
    randomWallet = randomWallet.connect(provider);
    const randomWalletBalance = await randomWallet.getBalance();
    console.log({ randomWalletBalance })
  })

})