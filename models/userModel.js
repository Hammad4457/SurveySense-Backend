import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    kyc_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KYC'
    },
    password: {
        type: String,
        required: true
    },
    profile_image: {
        type: String
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE', 'SUSPENDED'],
        default: 'INACTIVE'
    },
    subscription_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscription'
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    user_name: {
        type: String
    },
    user_type: {
        type: String
    }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
