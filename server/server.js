const express = require ("express")
const app = express()
const PORT = 8000
const cors = require("cors")

require("./config/mongoose.config")
app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors());

const AllMyAuthorRoutes = require("./routes/author.routes")
AllMyAuthorRoutes(app)

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}.`))