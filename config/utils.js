import path from 'path';

export function getAlias(alias) {
  return path.resolve(__dirname, '..', `src/${alias}`);
}
