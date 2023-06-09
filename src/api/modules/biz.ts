import { MAIN } from '../const';
import request from '../index';
/**
 * @title 列表
 * @description 查
 */
// 查
export async function query(params: IQueryBiz.Param): Promise<IBaseResp<IQueryBiz.Resp>> {
  try {
    const res = await request.get<IQueryBiz.Resp, IQueryBiz.Param>(MAIN.HOME, params);
    return res;
  } catch (error) {
    console.error(`get:${MAIN.HOME}----->：`, error);
    return {};
  }
}
