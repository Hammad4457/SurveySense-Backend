import express from 'express'
const router = express.Router();
import * as notificationController from '../controllers/notificationController.js';

router.post("/createNotification",notificationController.createNotification)

export default router;