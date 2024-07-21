import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
    action_type: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const AuditLogModel = mongoose.model('AuditLog', auditLogSchema);

export default AuditLogModel;
