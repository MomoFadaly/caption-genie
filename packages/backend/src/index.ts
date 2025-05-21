// Register module aliases
import 'module-alias/register';
import path from 'node:path';

// Set up module aliases
import moduleAlias from 'module-alias';
moduleAlias.addAliases({
  '@': path.join(__dirname),
});

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from '@/config/environment';
import logger from '@/utils/logger';

// Import routes
import routes from '@/api/routes';

// Create Express app
const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Request parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use(morgan('dev', { stream: { write: message => logger.info(message.trim()) } }));

// API routes
app.use(`${env.API_PREFIX}/healthcheck`, (_, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Main routes
app.use(env.API_PREFIX, routes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(`Error processing request: ${err.message}`, { path: req.path, error: err });
  res.status(500).json({
    success: false,
    message: 'An unexpected error occurred',
    error: env.NODE_ENV === 'development' ? err.message : undefined,
  });
  next();
});

// Start server
const PORT = env.PORT || 4000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT} in ${env.NODE_ENV} mode`);
  logger.info(`API available at http://localhost:${PORT}${env.API_PREFIX}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: unknown) => {
  logger.error('Unhandled Rejection', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception', error);
  process.exit(1);
});

export default app;
