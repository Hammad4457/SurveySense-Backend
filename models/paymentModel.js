import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    currency: {
        type: String,
        required: true
    },
    payment_date: {
        type: Date,
        default: Date.now
    },
    payment_type: {
        type: String,
        enum: ['VISACARD', 'STRIPE', 'MASTERCARD'],
        required: true
    },
    status: {
        type: String,
        enum: ['APPROVED', 'REJECTED'],
        default: 'APPROVED'
    },
    transaction_amount: {
        type: Number,
        required: true
    },
    transaction_type: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const PaymentModel = mongoose.model('Payment', paymentSchema);

export default PaymentModel;
