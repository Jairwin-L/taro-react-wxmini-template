/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.scss';
declare module '*.sass';
declare module 'flyio';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp';
  }
}
