export interface IRocket {
  _initialized: boolean;
  _version: string;
  defaultFeature: string[];
}

export type IRocketOptions = {
  config: IRocketConfig;
};

export type IRocketConfig = {
  remoteUrl: string;
  remotePVUrl: string;
  remoteUVUrl: string;
  pid: string;
  uid: string;
  tag: string;
  release: string;
  env: string;
  sample: number;
  enableSPA: boolean;
  enableLinkTrace: boolean;
  feature?: string[];
};

export interface IMonitor {
  _mounted: boolean;
  _version: string;
}