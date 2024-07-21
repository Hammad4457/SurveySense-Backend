import KYCModel from '../models/kycModel.js';

// Controller to handle creating a new KYC entry
const createKYC = async (req, res) => {
    try {
        const {
            address,
            category,
            cnic,
            country,
            date_of_birth,
            phone_number
        } = req.body;
        console.log("Heeree there")

        // Create a new KYC entry
        const newKYC = new KYCModel({
            address,
            category,
            cnic,
            country,
            date_of_birth,
            phone_number
        });

        // Save the new KYC entry to the database
        const savedKYC = await newKYC.save();

        res.status(201).json(savedKYC);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller to handle retrieving all KYC entries
const getAllKYC = async (req, res) => {
    try {
        // Retrieve all KYC entries from the database
        const allKYC = await KYCModel.find();

        res.status(200).json(allKYC);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export the controllers
export { createKYC, getAllKYC };
