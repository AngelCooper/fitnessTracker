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

//new exercise 
router.post("/api/workouts/:workout.id", (req, res) => {
    const body = req.body;
    const workoutId = req.params.workoutid;
    console.log("body", body);
    console
})