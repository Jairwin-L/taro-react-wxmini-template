import { CATEGORY } from '../const';
import useFetch from '../index';
/**
 * @title 购物车
 * @description 查
 */
// 列表查询
export async function query(
  params: IQueryCategory.QueryParam,
): Promise<IBaseResp<IQueryCategory.Resp>> {
  try {
    const res = await useFetch.get<IQueryCategory.Resp, IQueryCategory.QueryParam>(
      CATEGORY.LIST,
      params,
    );
    return res;
  } catch (error) {
    console.log(`get:${CATEGORY.LIST}----->：`, error);
    return {};
  }
}
