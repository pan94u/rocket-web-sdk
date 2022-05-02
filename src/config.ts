export default {
  remoteUrl: "//qq.com", // 所有上报的默认url
  remotePVUrl: "", // PV url
  remoteUVUrl: "", // UV url
  pid: "", // 产品id，控制台创建产品时产生
  uid: "", // 用户id，默认生成并保留半年
  tag: "", // 用户自定义tag
  release: "", // 应用版本号
  env: "dev", // 应用环境
  sample: 100, // 采样率
  enableSPA: false, // 开启单页面
  enableLinkTrace: false // 开启用户链路追踪
};