import { ApiUrl } from '../constants';
import { genEnvVersion } from '../utils';

const envVersion = genEnvVersion();

export const API_URL = ApiUrl[envVersion];
