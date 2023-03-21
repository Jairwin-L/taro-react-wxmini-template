/**
 * @module genPayParams
 * @description 生成支付参数
 */
function genPayParams(params) {
  const { timeStamp, nonceStr, signType, paySign } = params;
  return {
    timeStamp,
    nonceStr,
    package: params.package,
    signType,
    paySign,
  };
}

export { genPayParams };
