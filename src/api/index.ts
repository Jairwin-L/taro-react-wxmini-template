import { getStorageSync } from '@tarojs/taro';
import Fly from 'flyio/dist/npm/wx';
import { API_URL } from './config';

const fly = new Fly();

fly.config.timeout = 3500;
fly.interceptors.request.use((request) => {
  if (getStorageSync('token')) {
    request.headers.token = getStorageSync('token') || '';
    request.headers['Content-Type'] = 'application/json';
    request.headers.Accept = 'application/json';
  }
  return request;
});

fly.interceptors.response.use(
  (response) => {
    const data = response?.data || {};
    if (!data?.success) {
      // TODO:
    }
    return data;
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

class ApiRequest {
  private static instance: ApiRequest;
  static getInstance(BASE_URL: string) {
    if (!this.instance) this.instance = new ApiRequest(BASE_URL);
    return this.instance;
  }
  private BASE_URL = '';
  private constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
  }
  // RResp: response, Param: 入参
  async get<Resp, Param>(url: string, params: Param): Promise<IBaseResp<Resp>> {
    const response = await fly.get<Resp>(`${this.BASE_URL}${url}`, params);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
  async show<Resp, Param>(url: string, params: Param): Promise<IBaseResp<Resp>> {
    const { id } = params as Param & { id: string };
    const response = await fly.get(`${this.BASE_URL}${url}/${id}`);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
  async post<Resp, Param>(url: string, params: Param): Promise<IBaseResp<Resp>> {
    const response = await fly.post(`${this.BASE_URL}${url}`, params);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
  async delete<Resp, Param>(url: string, id: Param): Promise<IBaseResp<Resp>> {
    const response = await fly.delete(`${this.BASE_URL}${url}`, id);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
  async put<Resp, Param>(url: string, params: Param): Promise<IBaseResp<Resp>> {
    const response = await fly.put(`${this.BASE_URL}${url}`, params);
    return new Promise((resolve) => {
      resolve(response);
    });
  }
}

export default ApiRequest.getInstance(API_URL);
