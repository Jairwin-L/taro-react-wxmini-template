import request from '../index';
import { PAY } from '../const';
/**
 * @title 支付
 */
// 获取openid
export async function openid(params: IQueryPay.OpenIDParam): Promise<IBaseResp<IQueryPay.Resp>> {
  try {
    const res = await request.get<IQueryPay.Resp, IQueryPay.OpenIDParam>(PAY.OPENID, params);
    return res;
  } catch (error) {
    console.error(`get:${PAY.OPENID}----->：`, error);
    return {};
  }
}

// 获取openid
export async function create(
  params: IQueryPay.CreateParam,
): Promise<IBaseResp<IQueryPay.CreateResp>> {
  try {
    const res = await request.post<IQueryPay.CreateResp, IQueryPay.CreateParam>(PAY.CREATE, params);
    return res;
  } catch (error) {
    console.error(`get:${PAY.CREATE}----->：`, error);
    return {};
  }
}
