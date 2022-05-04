import { IRocket, IRocketOptions, IRocketConfig } from "./types";
import packageJSON from "../package.json";
import Storage from "./core/storage";
import Logger from "./core/logger";
import config from "./config";

class RocketWeb implements IRocket {
  _initialized = false;
  _version = packageJSON.version;
  storage: any;
  logger: any;
  config: IRocketConfig;
  defaultFeature = ["pv", "uv"];
  constructor(options: IRocketOptions) {
    this.config = options.config;
    this.storage = new Storage();
    this.logger = new Logger();
    this.initialize();
  }

  initialize() {
    console.log(this._version);
    const featureList = new Set([...this.defaultFeature, ...this.config.feature||[]]);
    featureList?.forEach((feature: string) => {
      console.log("Loading features: ", feature);
    });
    this._initialized = true;
  }
}

const w:any = window;
w.__ROCKET_WEB__ = new RocketWeb({
  config: Object.assign({}, config, w.__ROCKET_WEB_CONFIG__)
});