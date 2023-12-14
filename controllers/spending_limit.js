const User = require("../models/User");

exports.addSpendingLimitsDay = async (req, res) => {
    User.find({ user_id: req.params.uid })
        .then((user) => {
            user.spending_limit_day = req.body.spending_limit_day;
            user.save();
            return res.status(200).json("Add Spending Limits Successfully!");
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server Error' })
        })
}

exports.addSpendingLimitsMonth = async (req, res) => {
    User.find({ user_id: req.params.uid })
        .then((user) => {
            user.spending_limit_month = req.body.spending_limit_month;
            user.save();
            return res.status(200).json("Add Spending Limits Successfully!");
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server Error' })
        })
}

exports.addSpendingLimitsYear = async (req, res) => {
    User.find({ user_id: req.params.uid })
        .then((user) => {
            user.spending_limit_year = req.body.spending_limit_year;
            user.save();
            return res.status(200).json("Add Spending Limits Successfully!");
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server Error' })
        })
}