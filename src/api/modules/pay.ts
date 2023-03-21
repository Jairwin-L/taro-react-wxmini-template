import useFetch from '../index';
import { PAY } from '../const';
/**
 * @title 支付
 */
// 获取openid
export async function openid(params: IQueryPay.OpenIDParam): Promise<IBaseResp<IQueryPay.Resp>> {
  try {
    const res = await useFetch.get<IQueryPay.Resp, IQueryPay.OpenIDParam>(PAY.OPENID, params);
    return res;
  } catch (error) {
    console.log(`get:${PAY.OPENID}----->：`, error);
    return {};
  }
}

// 获取openid
export async function create(
  params: IQueryPay.CreateParam,
): Promise<IBaseResp<IQueryPay.CreateResp>> {
  try {
    const res = await useFetch.post<IBaseResp<IQueryPay.CreateResp>, IQueryPay.CreateParam>(
      PAY.CREATE,
      params,
    );
    return res;
  } catch (error) {
    console.log(`get:${PAY.CREATE}----->：`, error);
    return {};
  }
}
