/**
 * @module objectToParams
 * @description 小程序入参转换
 */
function objectToParams<T>(obj: T): string {
  const params = Object.entries(obj || {});
  if (params.length === 0) return '';
  return `?${params.map(([key, value]) => `${key}=${value}`).join('&')}`;
}

export default objectToParams;
