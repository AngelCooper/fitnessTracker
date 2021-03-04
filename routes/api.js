const router = require("express").Router();
const db = require("../models/workouts");

//last exercise
router.get("/api/workouts", async (req, res) => {
    db.Workout.findOne({})
    .sort({ day: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

