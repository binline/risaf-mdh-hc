import express from 'express';
import Contact from '../models/Contact.js';
import { requireAuth } from '../middleware/auth.js';
const router = express.Router();
router.post('/', async (req, res) => res.status(201).json(await Contact.create(req.body)));
router.get('/', requireAuth, async (_req, res) => res.json(await Contact.find().sort({ createdAt: -1 })));
export default router;
