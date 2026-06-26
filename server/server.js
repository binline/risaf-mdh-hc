import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

if (process.env.MONGO_URI) connectDB();

app.get('/', (_req, res) => res.json({ message: 'OffSec Cyberpunk Portfolio API running' }));
app.use('/api/projects', projectRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
