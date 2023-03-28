import { SHOP } from '../const';
import fetch from '../index';
/**
 * @title 购物车
 * @description 查
 */
// 列表查询
export async function query(params: IQueryAddress.QueryParam): Promise<IBaseResp<IQueryShop.Resp>> {
  try {
    const res = await fetch.get<IQueryShop.Resp, IQueryShop.QueryParam>(SHOP.LIST, params);
    return res;
  } catch (error) {
    console.error(`get:${SHOP.LIST}----->：`, error);
    return {};
  }
}
