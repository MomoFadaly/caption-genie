import { Router } from 'express';

// Create main router
const router = Router();

// Define API routes
router.get('/', (_, res) => {
  res.json({
    message: 'Caption Genie API',
    version: '1.0.0',
    endpoints: [
      '/auth',
      '/users',
      '/media',
      '/transcriptions',
    ],
  });
});

// Import route modules (to be implemented later)
// import authRoutes from './auth.routes';
// import userRoutes from './user.routes';
// import mediaRoutes from './media.routes';
// import transcriptionRoutes from './transcription.routes';

// Use route modules (commented out until implemented)
// router.use('/auth', authRoutes);
// router.use('/users', userRoutes);
// router.use('/media', mediaRoutes);
// router.use('/transcriptions', transcriptionRoutes);

export default router; 