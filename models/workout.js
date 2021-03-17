const mongoose = require("mongoose");

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: {
        type: Array,
        ref: 'Exercise'
    },

    duration: {
        type: Number,
        default: 0
    },

    weight: Number     
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;