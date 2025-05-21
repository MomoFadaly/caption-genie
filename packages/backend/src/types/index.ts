// User-related types
export interface User {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  CREATOR = 'creator',
}

// Auth-related types
export interface AuthPayload {
  userId: string;
  email: string;
  role: UserRole;
}

export interface LoginResponse {
  token: string;
  refreshToken?: string;
  user: Omit<User, 'password'>;
}

// Media-related types
export interface MediaItem {
  id: string;
  userId: string;
  title: string;
  description?: string;
  sourceUrl: string;
  fileUrl?: string;
  duration?: number;
  status: MediaStatus;
  transcriptionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum MediaStatus {
  PENDING = 'pending',
  QUEUED = 'queued',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

// Transcription-related types
export interface Transcription {
  id: string;
  mediaId: string;
  content: string;
  language?: string;
  captions?: TranscriptionSegment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TranscriptionSegment {
  start: number;
  end: number;
  text: string;
}

// Job queue types
export interface TranscriptionJob {
  mediaId: string;
  userId: string;
  sourceUrl: string;
  fileUrl?: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
} 