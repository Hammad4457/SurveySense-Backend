import express from 'express';
const router= express.Router();
import * as paymentController from '../controllers/paymentController.js';

router.post('/createPayment',paymentController.createPayment);

export default router;