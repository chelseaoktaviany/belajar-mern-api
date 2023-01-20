const express = require("express");
const router = express.Router();

// from controllers
const {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal
} = require('../controllers/goalController');

const {protect} = require('../middleware/authMiddleWare');

// for clean code
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').post(protect, updateGoal).delete(protect, deleteGoal);


module.exports = router;