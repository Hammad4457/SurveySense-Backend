import express from 'express';
const router = express.Router();
import * as kycController from '../controllers/kycController.js';

router.post('/register', kycController.createKYC);


export default router;