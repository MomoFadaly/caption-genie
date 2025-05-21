import winston from 'winston';
import { env } from '@/config/environment';

// Define log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define log level based on environment
const level = () => {
  return env.NODE_ENV === 'development' ? 'debug' : 'info';
};

// Define custom log format
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.json(),
);

// Define transports (where logs will be written to)
const fileTransports = [
  // Error logs will be written to error.log file
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  // All logs will be written to combined.log file
  new winston.transports.File({ filename: 'logs/combined.log' }),
];

// Create the logger instance
const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports: fileTransports,
  silent: env.NODE_ENV === 'test', // Disable logging in test environment
});

// If we're not in production, add console transport
if (env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ timestamp, level, message, stack }) => {
          return `${timestamp} ${level}: ${message} ${stack ? `\n${stack}` : ''}`;
        }),
      ),
    }),
  );
}

export default logger; 