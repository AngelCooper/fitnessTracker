const router = require("express").Router();
const { Workout } = require("../models");
const db = require("../models/workout");

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
router.put("/api/workouts/:workout.id", (req, res) => {
    const body = req.body;
    const workoutId = req.params.workoutid;
    console.log("body", body);
    console.log("id" + JSON.stringify(req.params));
    db.Workout.findByIdAndUpdate(
        {_id: workoutId},{$push:{exercises: body}}
    ).then(dbExercise => {
        console.log("db exercise" + dbExercise);
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbworkout => {
        res.jsom(dbworkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;