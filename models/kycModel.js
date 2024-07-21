import mongoose from 'mongoose';

const kycSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['USER', 'ORGANIZATION'],
        required: true
    },
    cnic: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['VERIFIED', 'PENDING', 'DECLINED'],
        default: 'PENDING'
    }
});

const KYCModel = mongoose.model('KYC', kycSchema);

export default KYCModel;
