import moongoose from 'mongoose';

import { ENV } from './env.js';    


export const connectDB = async () => {
  try {
const conn = await moongoose.connect(ENV.DB_URL, {   
    });
    console.log('✅ MongoDB connected successfully 🚀');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};