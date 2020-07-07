import { usePlugin } from "@nomiclabs/buidler/config";
import { BuidlerConfig } from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-ethers");

const config: BuidlerConfig = {
  solc: {
    version: "0.6.9",
  },
};

export default config;
