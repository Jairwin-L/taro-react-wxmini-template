import { makePageUrl } from '../utils/page-path';

export const PAGES: [string, string, string, string] = [
  makePageUrl('main'),
  makePageUrl('category'),
  makePageUrl('shop'),
  makePageUrl('mine'),
];
export const SUB_PAGES: string[] = [
  makePageUrl('address'),
  makePageUrl('address/add'),
  makePageUrl('address/edit'),
  makePageUrl('collection'),
  makePageUrl('change-password'),
  makePageUrl('pay'),
];
