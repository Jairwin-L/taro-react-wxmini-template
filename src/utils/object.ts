function objectToParams<T>(obj: T) {
  const params = Object.keys(obj || {}) || [];
  if (params.length <= 0) return '';
  let value = '?';
  params.forEach((key) => {
    value += `${key}=${obj[key]}&`;
  });
  return value.slice(0, -1);
}

export default objectToParams;
