const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/exercise', (req, res) => {
    res.sendFile(__dirname + '/public/exercise.html')
})
app.get('/stats', (req, res) => {
    res.sendFile(__dirname + '/public/stats.html')
})

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true, 
    useUnifiedTopology: true

});

//routes 
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});