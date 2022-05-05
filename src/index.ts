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

  /**
   * 初始化
   */
  initialize() {
    this.initData();
    this.initFeature();
    this._initialized = true;
    console.log("rocket-trace initialize successful,version:", this._version);
  }

  /**
   * 初始化必备数据
   */
  initData() {}

  /**
   * 初始化开启的能力
   */
  initFeature() {
    const featureList = new Set([...this.defaultFeature, ...(this.config.feature || [])]);
    featureList?.forEach((feature: string) => {
      console.log("Loading features: ", feature);
    });
  }

  /**
   * 初始化开启的能力
   * @param config
   */
  setConfig(config: IRocketConfig) {}
}

const w: any = window;
w.__ROCKET_WEB__ = new RocketWeb({
  config: Object.assign({}, config, w.__ROCKET_WEB_CONFIG__)
});
