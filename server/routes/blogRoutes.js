import express from 'express';
import Blog from '../models/Blog.js';
import { requireAuth } from '../middleware/auth.js';
const router = express.Router();
router.get('/', async (_req, res) => res.json(await Blog.find({ published: true }).sort({ createdAt: -1 })));
router.post('/', requireAuth, async (req, res) => res.status(201).json(await Blog.create(req.body)));
router.put('/:id', requireAuth, async (req, res) => res.json(await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })));
router.delete('/:id', requireAuth, async (req, res) => { await Blog.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); });
export default router;
