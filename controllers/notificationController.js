import NotificationModel from '../models/notificationModel.js'; // Adjust the path as necessary

// GET all notifications
export const getAllNotifications = async (req, res) => {
    try {
        const notifications = await NotificationModel.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET one notification by ID
export const getNotificationById = async (req, res) => {
    try {
        const notification = await NotificationModel.findById(req.params.id);
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE a notification
export const createNotification = async (req, res) => {
    const notification = req.body;

    try {
        const newNotification = new NotificationModel(notification);
        await newNotification.save();
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// UPDATE a notification by ID
export const updateNotification = async (req, res) => {
    const { id } = req.params;
    const { content, dates, sender, user_id, type } = req.body;
    try {
        const updatedNotification = await NotificationModel.findByIdAndUpdate(id, { content, dates, sender, user_id, type }, { new: true });
        if (!updatedNotification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE a notification by ID
export const deleteNotification = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedNotification = await NotificationModel.findByIdAndRemove(id);
        if (!deletedNotification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
