import { CATEGORY } from '../const';
import useFetch from '../index';
/**
 * @title 类目
 * @description 查
 */
// 列表查询
export async function query(): Promise<IBaseResp<IQueryCategory.Resp>> {
  try {
    const res = await useFetch.get<IQueryCategory.Resp>(CATEGORY.LIST);
    return res;
  } catch (error) {
    console.log(`get:${CATEGORY.LIST}----->：`, error);
    return {};
  }
}
