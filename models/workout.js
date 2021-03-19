const mongoose = require("mongoose");

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        required: ["Time", true]
    },
    distance: {
        type: Number,
        min: 0
    },
    
    exercises: {
        type: {
            type: Array,
            ref: 'Exercise'
        }

    },
    name: {
        type: String,
        trim: true
    },

    duration: {
        type: Number,
        default: 0
    },
    weight: {
        type: Number,
        min: 0
    },
    reps: {
        type: Number,
        min: 0
    },



});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;