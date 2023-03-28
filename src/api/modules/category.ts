import { CATEGORY } from '../const';
import fetch from '../index';
/**
 * @title 类目
 * @description 查
 */
// 列表查询
export async function query(): Promise<IBaseResp<IQueryCategory.Resp>> {
  try {
    const res = await fetch.get<IQueryCategory.Resp>(CATEGORY.LIST);
    return res;
  } catch (error) {
    console.error(`get:${CATEGORY.LIST}----->：`, error);
    return {};
  }
}
