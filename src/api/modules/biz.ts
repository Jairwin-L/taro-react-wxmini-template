import { MAIN } from '../const';
import apiRequest from '../index';
/**
 * @title 列表
 * @description 查
 */
// 查
export async function query(params: IQueryBiz.RequestParam): Promise<IBaseResp<IQueryBiz.Resp>> {
  try {
    const res = await apiRequest.get<IQueryBiz.Resp, IQueryBiz.RequestParam>(MAIN.HOME, params);
    return res;
  } catch (error) {
    console.log(`error----->：`, error);
    return {};
  }
}
