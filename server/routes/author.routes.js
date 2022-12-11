const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.get("/api/authors", AuthorController.findAllAuthors),
    app.post("/api/createAuthor", AuthorController.createAuthor),
    app.get("/api/author/:id",AuthorController.findOneAuthor),
    app.put("/api/author/:id", AuthorController.updateOneAuthor),
    app.delete("/api/author/:id", AuthorController.deleteOneAuthor)
}