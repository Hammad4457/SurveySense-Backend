import PaymentModel from '../models/paymentModel.js'; // Adjust the path as necessary

// GET all payments
export const getAllPayments = async (req, res) => {
    try {
        const payments = await PaymentModel.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET one payment by ID
export const getPaymentById = async (req, res) => {
    try {
        const payment = await PaymentModel.findById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE a payment
export const createPayment = async (req, res) => {
    const payment = req.body;

    try {
        const newPayment = new PaymentModel(payment);
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// UPDATE a payment by ID
export const updatePayment = async (req, res) => {
    const { id } = req.params;
    const { currency, payment_date, payment_type, status, transaction_amount, transaction_type } = req.body;

    try {
        const updatedPayment = await PaymentModel.findByIdAndUpdate(id, { currency, payment_date, payment_type, status, transaction_amount, transaction_type }, { new: true });
        if (!updatedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE a payment by ID
export const deletePayment = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPayment = await PaymentModel.findByIdAndRemove(id);
        if (!deletedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
