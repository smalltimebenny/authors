const Author = require("../models/author.model")

module.exports = {
    createAuthor: (req, res)=> {
        Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => {
            console.log("Didn't get the author entry made.")
            res.status(400).json(err)
        })
    },
    findAllAuthors: (req, res) => {
        Author.find({})
        .then(authors => res.json(authors))
        .catch(err => {
            console.log("Couldn't complete find all.")
            res.status(400).json(err)
        })
    },
    findOneAuthor: (req, res) => {
        Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => {
            console.log("Couldn't find single author.")
            res.status(400).json(err)})
    },
    updateOneAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
        .then(author => res.json(author))
        .catch(err => {
            console.log("Did not update author.")
            res.status(400).json(err)})
    },
    deleteOneAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => {
            console.log("Did not complete delete function.")
            res.status(400).json(err)})
    }
}