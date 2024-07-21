import SubscriptionModel from '../models/subscriptionModel.js'; 

// Create a new subscription
export const createSubscription = async (req, res) => {
    try {
        const subscription = new SubscriptionModel(req.body);
        await subscription.save();
        res.status(201).json(subscription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all subscriptions
export const getSubscriptions = async (req, res) => {
    try {
        const subscriptions = await SubscriptionModel.find();
        res.status(200).json(subscriptions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single subscription by ID
export const getSubscriptionById = async (req, res) => {
    try {
        const { id } = req.params;
        const subscription = await SubscriptionModel.findById(id);
        if (!subscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }
        res.status(200).json(subscription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a subscription by ID
export const updateSubscription = async (req, res) => {
    try {
        const { id } = req.params;
        const subscription = await SubscriptionModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!subscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }
        res.status(200).json(subscription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a subscription by ID
export const deleteSubscription = async (req, res) => {
    try {
        const { id } = req.params;
        const subscription = await SubscriptionModel.findByIdAndDelete(id);
        if (!subscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }
        res.status(200).json({ message: 'Subscription deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
