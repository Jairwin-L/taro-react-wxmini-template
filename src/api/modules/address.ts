import { ADDRESS } from '../const';
import apiRequest from '../index';
/**
 * @title 地址
 * @description 增删改查
 */
// 列表查询
export async function query(
  params: IQueryAddress.QueryParam,
): Promise<IBaseResp<IQueryAddress.Resp>> {
  try {
    const res = await apiRequest.get<IQueryAddress.Resp, IQueryAddress.QueryParam>(
      ADDRESS.LIST,
      params,
    );
    return res;
  } catch (error) {
    console.log(`get:${ADDRESS.LIST}----->：`, error);
    return {};
  }
}
// 详情
export async function show(params: IQueryAddress.Param): Promise<IBaseResp<IQueryAddress.Resp>> {
  try {
    const res = await apiRequest.get<IQueryAddress.Resp, IQueryAddress.Param>(ADDRESS.SHOW, params);
    return res;
  } catch (error) {
    console.log(`get:${ADDRESS.SHOW}----->：`, error);
    return {};
  }
}
// 删除
export async function del(params: IQueryAddress.DelParam): Promise<IBaseResp<string>> {
  try {
    const res = await apiRequest.delete<IBaseResp<string>, IQueryAddress.DelParam>(
      ADDRESS.DEL,
      params,
    );
    return res;
  } catch (error) {
    console.log(`delete:${ADDRESS.DEL}----->：`, error);
    return {};
  }
}
// 创建
export async function create(params: IQueryAddress.Param): Promise<IBaseResp<string>> {
  try {
    const res = await apiRequest.post<IBaseResp<string>, IQueryAddress.Param>(
      ADDRESS.CREATE,
      params,
    );
    return res;
  } catch (error) {
    console.log(`post:${ADDRESS.CREATE}----->：`, error);
    return {};
  }
}
// 修改
export async function edit(params: IQueryAddress.EditParam): Promise<IBaseResp<string>> {
  try {
    const res = await apiRequest.put<IBaseResp<string>, IQueryAddress.EditParam>(
      ADDRESS.EDIT,
      params,
    );
    return res;
  } catch (error) {
    console.log(`put:${ADDRESS.EDIT}----->：`, error);
    return {};
  }
}
