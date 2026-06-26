import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  severity: String,
  cvss: String,
  summary: String,
  impact: String,
  remediation: String,
  reportType: { type: String, default: 'Sample / Lab / Authorized' }
}, { timestamps: true });

export default mongoose.model('Report', reportSchema);
