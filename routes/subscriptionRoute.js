import express from 'express';
const router = express.Router();
import * as subscriptionController from '../controllers/subscriptionController.js'

router.post('/createSubscription', subscriptionController.createSubscription);

export default router;