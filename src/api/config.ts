import { ApiUrl } from '../constants';
import { genEnvVersion } from '../utils';

const envVersion = genEnvVersion();

export const API_URL = ApiUrl[envVersion];

export const config = {
  timeout: 3500,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};
