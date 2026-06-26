import express from 'express';
import Project from '../models/Project.js';
import { requireAuth } from '../middleware/auth.js';
const router = express.Router();
router.get('/', async (_req, res) => res.json(await Project.find().sort({ createdAt: -1 })));
router.post('/', requireAuth, async (req, res) => res.status(201).json(await Project.create(req.body)));
router.put('/:id', requireAuth, async (req, res) => res.json(await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })));
router.delete('/:id', requireAuth, async (req, res) => { await Project.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); });
export default router;
