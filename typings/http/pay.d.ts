declare namespace IQueryPay {
  type Resp = string;
  interface OpenIDParam {
    code: string;
  }
  interface CreateParam {
    openid: string;
  }
  interface CreateResp {
    timeStamp: string;
    nonceStr: string;
    package: string;
    signType: string;
    paySign: string;
  }
}
