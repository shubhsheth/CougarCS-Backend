export const {
	PORT = 4000,
	NODE_ENV = 'dev',
	SENDGRID_API_KEY = 'test',
	CALENDAR_ID = 'test',
	CALENDAR_API_KEY = 'test',
	SHEET_API = 'test',
	RECAPTCHA_SECRET_KEY = 'test',
	STRIPE_API_KEY = 'test',
	SENTRY_URL = '',
	SEND_EMAIL = 'test@test.com',
} = process.env;

export const PROD = NODE_ENV === 'prod';
export const DEV = NODE_ENV === 'dev';
export const TEST = NODE_ENV === 'test';

export const ENABLE_CORS = PROD;
export const CACHE_TIME = TEST ? 30 : 1000 * 60 * 60 * 4; // 4 hour
