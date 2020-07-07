
import { ethers } from 'ethers';

// import { ethers } from "@nomiclabs/buidler";
// import { Signer } from "ethers";

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
provider.pollingInterval = 50;

type PrivKey = string | ArrayLike<number> | ethers.utils.SigningKey | ethers.utils.HDNode.HDNode

const createFromPrivateKey = (privKey: PrivKey) => {
  try {
    const wallet = new ethers.Wallet(privKey);
    return wallet;
  } catch (error) {
    throw new Error(`Error creating account: ${error.message}`);
  }
};

const privateKeys = [
  '0x02380f59eeed7a02557aeaab089606739feb0e1db34c6b08374ad31188a3892d',
  '0x2232aa52d058352511c5dd2d0ebcc0cfb6dfb5f051a9b367b7505556d2672490',
  '0x573862e2beaa8dcaf00094c7a56dcb81bcf82c83fc1bb0f9292d6cd656db45df',
  '0xcc51b0d7bb32d222416bfd885498659a9270a1790ba0fcb1771a5fd20507ffa9',
  '0x1fed0a74c3c287f5c93479ff5ba60e1a32974d49425bd6d596ecd0b0f77e0352',
  '0x9f071322c7c55e5d8b7e9778788e798384371c5ec716c60614dd7db009947e18',
  '0xa6d4b9724775bbc5541158ad69e6428af60e5f2251d0bf8fd3e8ab7efa12ee93',
  '0xe1ba62dfb842495d59579dfca29e212ceb78818af7c5869623317fc46dd1a5bf',
  '0xda1a8c477afeb99ae2c2300b22ad612ccf4c184564e332ae9a32f784bbca8d6b',
  '0x633a290bcdabb9075c5a4b3885c69ce64b4b0e6079eb929abb2ac9427c49733b',
];

describe("ethers", () => {
  let wallet: any;
  let accounts: any[];

  beforeEach(async () => {
    accounts = privateKeys.map(createFromPrivateKey);
    [wallet] = accounts; // let's not worry about where this came from for this example
    wallet = wallet.connect(provider);
  });

  // Note: Not triggering these in a loop to
  // ensure Jest runs them in parallel

  test.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])("should get balance of wallet", async () => {
    let randomWallet = ethers.Wallet.createRandom();
    
    const walletBalance = await wallet.getBalance();
    console.log({ walletBalance })
    randomWallet = randomWallet.connect(provider);
    const randomWalletBalance = await randomWallet.getBalance();
    console.log({ randomWalletBalance })
    expect(randomWallet.address).toHaveLength(42);
  })

})