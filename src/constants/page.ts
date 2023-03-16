import { getPagePreFix } from '../utils/page-path';

export const PAGES: [string, string] = [getPagePreFix('main'), getPagePreFix('mine')];
export const SUB_PAGES: string[] = [
  getPagePreFix('address'),
  getPagePreFix('address/add'),
  getPagePreFix('collection'),
  getPagePreFix('change-password'),
];
