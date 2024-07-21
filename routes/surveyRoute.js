import express from 'express';
const router = express.Router();
import * as surveyController from '../controllers/surveyController.js';

router.post('/createSurvey', surveyController.createSurvey);

export default router;
