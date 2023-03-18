import { ApiUrl } from '../constants';
import { getEnvVersion } from '../utils';

const envVersion = getEnvVersion();

export const API_URL = ApiUrl[envVersion];
