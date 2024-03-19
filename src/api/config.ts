import { ApiUrl } from '../constants';
import { getEnvVersion } from '../utils';

const envVersion = getEnvVersion();

export const API_URL = ApiUrl[envVersion];

export const config = {
  timeout: 3500,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};
