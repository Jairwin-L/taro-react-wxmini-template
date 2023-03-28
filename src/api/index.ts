import { getStorageSync, showToast } from '@tarojs/taro';
import Fly from 'flyio/dist/npm/wx';
import { DEFAULT_ERROR_MSG, SYSTEM_ERROR_MSG, SYSTEM_SUCCESS_MSG } from './../constants/api';
import { API_URL, config } from './config';

const fly = new Fly(config);

fly.interceptors.request.use((request) => {
  if (getStorageSync('token')) {
    request.headers.token = getStorageSync('token') || '';
  }
  return request;
});

fly.interceptors.response.use(
  (response) => {
    const { data, request } = response;
    const result = data || {};
    const { method } = request || {};
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
      if (!result?.success) {
        let errorMsg = '';
        // showToast无法提示超过7个字的内容，故特殊处理
        if (data.msg.length > 7) {
          errorMsg = DEFAULT_ERROR_MSG;
        } else {
          errorMsg = data.msg || SYSTEM_ERROR_MSG;
        }
        showToast({
          title: errorMsg,
          icon: 'error',
        });
      } else {
        showToast({
          title: data.msg || SYSTEM_SUCCESS_MSG,
          icon: 'success',
        });
      }
    }
    return result;
  },
  (error: any) => {
    console.error('[EXCEPTION/interceptors] response error:%j', error);
    const data: any = error.response?.data;
    const statusCode = Number(data?.code);
    if (Number(error.status) === 401) {
      console.log(`----->：`, error);
    }
    if (statusCode === 404) return Promise.reject(error);
    // 发生网络错误后会走到这里
    return Promise.resolve(error.status);
  },
);

class Request {
  private static instance: Request;
  static getInstance(BASE_URL: string) {
    if (!this.instance) this.instance = new Request(BASE_URL);
    return this.instance;
  }
  private BASE_URL = '';
  private constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
  }
  // RResp: response, Param: 入参
  get<Resp, Param = never>(url: string, params?: Param): Promise<IBaseResp<Resp>> {
    return this.fetch(url, 'get', params);
  }
  delete<Resp, Param>(
    url: string,
    params: NonNullable<Param & { id: number }>,
  ): Promise<IBaseResp<Resp>> {
    const { id } = params;
    return this.fetch(`${url}/${id}`, 'delete');
  }
  put<Resp, Param>(url: string, params: Param): Promise<IBaseResp<Resp>> {
    return this.fetch(url, 'put', params);
  }
  post<Resp, Param>(url: string, params: Param): Promise<IBaseResp<Resp>> {
    return this.fetch(url, 'post', params);
  }
  private async fetch<Resp, Param>(
    url: string,
    method: string,
    params?: Param,
  ): Promise<IBaseResp<Resp>> {
    const response = await fly[method](`${this.BASE_URL}${url}`, params);
    return response;
  }
}

export default Request.getInstance(API_URL);
