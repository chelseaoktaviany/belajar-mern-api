const express = require("express");
const router = express.Router();

// from controllers
const {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal
} = require('../controllers/goalController');

// for clean code
router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);


// router.get('/', getGoals);
// router.post('/', setGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

module.exports = router;