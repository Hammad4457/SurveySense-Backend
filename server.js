import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import kycRouter from './routes/kycRoute.js';
import userRouter from './routes/userRoutes.js';
import surveyRouter from './routes/surveyRoute.js';
import subscriptionRouter from './routes/subscriptionRoute.js';
import paymentRouter from './routes/paymentRoute.js';
import notificationRouter from './routes/notificationRoute.js'
import auditLogRouter from './routes/auditRoute.js';

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

console.log("New Start Hammad");

app.get("/survey/createSurvey", (req, res) => { res.json({ message: "API running" }) });

app.use("/api/kyc", kycRouter);
app.use("/api/users", userRouter);
app.use("/api/surveys", surveyRouter);
app.use("/api/subscriptions", subscriptionRouter)
app.use("/api/payments", paymentRouter);
app.use("/api/notifications",notificationRouter);
app.use("/api/auditLogs",auditLogRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the Express server!");
});

app.listen(3000, () => {
    console.log("App is Running on port 3000");
});
