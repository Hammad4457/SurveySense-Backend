import AuditLogModel from '../models/auditLogsModel.js'; // Adjust the path as necessary

// GET all audit logs
export const getAllAuditLogs = async (req, res) => {
    try {
        const auditLogs = await AuditLogModel.find();
        res.status(200).json(auditLogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET one audit log by ID
export const getAuditLogById = async (req, res) => {
    try {
        const auditLog = await AuditLogModel.findById(req.params.id);
        if (!auditLog) {
            return res.status(404).json({ message: 'Audit log not found' });
        }
        res.status(200).json(auditLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE an audit log
export const createAuditLog = async (req, res) => {
    const { action_type, user_id } = req.body;

    try {
        const newAuditLog = new AuditLogModel({
            action_type,
            user_id
        });
        await newAuditLog.save();
        res.status(201).json(newAuditLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// UPDATE an audit log by ID
export const updateAuditLog = async (req, res) => {
    const { id } = req.params;
    const { action_type, user_id } = req.body;

    try {
        const updatedAuditLog = await AuditLogModel.findByIdAndUpdate(id, { action_type, user_id }, { new: true });
        if (!updatedAuditLog) {
            return res.status(404).json({ message: 'Audit log not found' });
        }
        res.status(200).json(updatedAuditLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE an audit log by ID
export const deleteAuditLog = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAuditLog = await AuditLogModel.findByIdAndRemove(id);
        if (!deletedAuditLog) {
            return res.status(404).json({ message: 'Audit log not found' });
        }
        res.status(200).json({ message: 'Audit log deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
