import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    active_date: {
        type: Date,
        ref: 'payment'
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    discount_code: {
        type: String
    },
    discount_amount: {
        type: Number,
        default: 0
    },
    expiry_date: {
        type: Date
    },
    renewal_type: {
        type: String,
        enum: ['RECURRING', 'ONCE'],
        default: 'RECURRING'
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    subscription_type: {
        type: String,
        enum: ['MONTHLY', 'QUARTERLY', 'SEMIANNUALLY', 'YEARLY'],
        required : true
    },
    trial_start: {
        type: Date
    },
    trial_end: {
        type: Date
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const SubscriptionModel = mongoose.model('Subscription', subscriptionSchema);

export default SubscriptionModel;
