const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [
            true,
            "First name is required!"
        ],
        minLength: [2, "Must be at least two (2) characters!"]
    },
    lastName: {
        type: String,
        required: [
            true,
            "Last name is required!"
        ],
        minLength: [2, "Must be at least two (2) characters!"]
    },
},{timestamps:true});

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author; 