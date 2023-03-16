export function objectToParams<T>(obj: T) {
  if (Object.keys(obj || {}).length <= 0) return '';
  let value = '?';
  Object.keys(obj || {}).forEach((key) => {
    value += `${key}=${obj[key]}&`;
  });
  return value.slice(0, -1);
}
