import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    dates: {
        time_stamp: {
            type: Date,
            default: Date.now
        }
    },
    sender: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        enum: ['INFO', 'ALERT', 'REMINDER'],
        required: true
    }
});

const NotificationModel = mongoose.model('Notification', notificationSchema);

export default NotificationModel;
