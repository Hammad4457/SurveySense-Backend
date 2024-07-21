import SurveyModel from '../models/surveyModel.js'; // Adjust the path based on your project structure

// Create a new survey


export const createSurvey = async (req, res) => {
    try {
        const newSurvey = new SurveyModel(req.body);
        const savedSurvey = await newSurvey.save();
        res.status(201).json(savedSurvey);
    } catch (error) {
        console.error("Error creating survey:", error);
        res.status(400).json({ message: error.message });
    }
};


// Get all surveys
export const getSurveys = async (req, res) => {
    try {
        const surveys = await SurveyModel.find();
        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single survey by ID
export const getSurveyById = async (req, res) => {
    try {
        const survey = await SurveyModel.findById(req.params.id);
        if (!survey) return res.status(404).json({ message: 'Survey not found' });
        res.status(200).json(survey);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a survey by ID
export const updateSurvey = async (req, res) => {
    try {
        const updatedSurvey = await SurveyModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSurvey) return res.status(404).json({ message: 'Survey not found' });
        res.status(200).json(updatedSurvey);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a survey by ID
export const deleteSurvey = async (req, res) => {
    try {
        const deletedSurvey = await SurveyModel.findByIdAndDelete(req.params.id);
        if (!deletedSurvey) return res.status(404).json({ message: 'Survey not found' });
        res.status(200).json({ message: 'Survey deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

