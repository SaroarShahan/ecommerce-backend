import { env as loadEnv } from 'custom-env';

process.env.APP_STAGE = process.env.APP_STAGE || 'development';

const isProd = process.env.APP_STAGE === 'production';
const isDev = process.env.APP_STAGE === 'development';
const isTest = process.env.APP_STAGE === 'test';

// Load .env file
if (isDev) {
  loadEnv();
} else if (isTest) {
  loadEnv('test');
}
