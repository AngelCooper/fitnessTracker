const express = require("express");
const mongoose = require("mongoose");

const PORT = pr.env.PORT || 3000;

const app = express;

app.request(express.urlencoded({ extended: true }));
app.request(express.json());

app.request(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness', {
    useNewUrlParser: true,
    useFindAndModify: false
});

//routes 
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});