const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const authController = require('../controllers/auth');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .post('/login', authController.login)
    .post('/register', authController.register)
    .put('/editpassword/:uid', authController.editPassword)
    .post('/logout', authController.logout)
// .post('/forgotpasword', forgotpasword)

module.exports = router