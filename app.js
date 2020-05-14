const express = require('express');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

const app = express();

const body_parser = require('body-parser');

const machining_controller = require('./machining_controller');

// npm init
// npm install express
// npm install mongoose
// npm install nodemon --save-dev
// npm install body-parser
// npm run start-dev (development, auto-restart on save)
// npm run start

//GET /index.html
app.use("/", express.static('public'));

app.use(body_parser.json()); //req.body.name
app.use(body_parser.urlencoded({
    extended: true
})); // machining/id

app.use((req, res, next) => {
    console.log(req.method, ' ', req.path);
    next();
}); // GET /api/machinings


// RESTful API
// CRUD OPERATIONS

//CREATE
app.post("/api/machining-parameter-set", machining_controller.api_post_machining);

//api.domain.com/machinings
// READ
app.get("/api/machining-parameter-set", machining_controller.api_get_machinings);


// UPDATE
//app.patch korvaa vain tietyt kentät
//app.put korvaa koko tiedon
app.put("/api/machining-parameter-set/:id", machining_controller.api_put_machining);


// DELETE
app.delete("/api/machining-parameter-set/:id", machining_controller.api_delete_machining);


const database_uri = "mongodb+srv://jj:klYn0WubvlN4g5Zl@klusteri-3l5ki.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(database_uri, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => {
    console.log('database connected');
    app.listen(port);
}).catch(err => {
    console.log(err);
});
