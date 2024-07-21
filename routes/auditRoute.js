import express from 'express';
const router = express.Router();
import * as auditController from '../controllers/auditController.js';

router.post("/createAuditLog",auditController.createAuditLog);

export default router;