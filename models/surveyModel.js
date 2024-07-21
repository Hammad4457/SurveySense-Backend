import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema({
    content: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    expiry_date: {
        type: Date
    },
    footer: {
        type: String
    },
    header: {
        type: String
    },
    language: {
        type: String
    },
    project_type: {
        type: String
    },
    survey_status: {
        type: String,
        enum: ['OPEN', 'DRAFT'],
        default: 'DRAFT'
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['CUSTOM', 'MODIFIED', 'SCRATCH']
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    visibility: {
        type: String,
        enum: ['PUBLIC', 'PRIVATE', 'RESTRICTED'],
        default: 'PRIVATE'
    }
});

const SurveyModel = mongoose.model('Survey', surveySchema);

export default SurveyModel;
