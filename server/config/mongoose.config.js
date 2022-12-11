const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,})
    .then(() => console.log("Connection to database made."))
    .catch( err => console.log("Did not connect to database.", err))