import { IRocket, IRocketOptions, IRocketConfig } from "./types";
import Storage from "./core/storage";
import Logger from "./core/logger";
import config from "./config";

class RocketWeb implements IRocket {
  _installed = false;
  storage: any;
  logger: any;
  config: IRocketConfig;
  constructor(options: IRocketOptions) {
    this.config = options.config;
    this.storage = new Storage();
    this.logger = new Logger();
  }
}

const w:any = window;
w.__ROCKET_WEB__ = new RocketWeb({
  config: Object.assign({}, config, w.__ROCKET_WEB_CONFIG__)
});
console.log(w.__ROCKET_WEB__);