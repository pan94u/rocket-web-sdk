export interface IRocket {
    _installed: boolean;
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
};