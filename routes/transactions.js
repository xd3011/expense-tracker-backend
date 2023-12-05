const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const authController = require('../controllers/auth');
const middlewareController = require('../middleware/authmiddle');

const router = require('express').Router();


router.post('/:uid/add-income', middlewareController.verifyTokenAndCheckIsUser, addIncome)
    .get('/:uid/get-incomes', middlewareController.verifyTokenAndCheckIsUser, getIncomes)
    .delete('/:uid/delete-income/:id', middlewareController.verifyTokenAndCheckIsUser, deleteIncome)
    .post('/:uid/add-expense', middlewareController.verifyTokenAndCheckIsUser, addExpense)
    .get('/:uid/get-expenses', middlewareController.verifyTokenAndCheckIsUser, getExpense)
    .delete('/:uid/delete-expense/:id', middlewareController.verifyTokenAndCheckIsUser, deleteExpense)
    .post('/login', authController.login)
    .post('/register', authController.register)
    .put('/editpassword/:uid', authController.editPassword)
    .post('/logout', authController.logout)
    .post('/forgotpasword', authController.forgotPassword)

module.exports = router