import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tag: String,
  level: String,
  description: String,
  tech: [String],
  githubUrl: String,
  liveUrl: String,
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
