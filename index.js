const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8002


const database = require("./services/database");
const ElectionSystemAdminRoutes = require("./routes/adminRoute");
const ElectionSystemElectionRoutes = require("./routes/electionRoute");

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/public', express.static('public'));

app.use(bodyParser.json())
app.set("view engine", "ejs");




app.use("/ewas.covid.edu/admin", ElectionSystemAdminRoutes);
app.use("/ewas.covid.edu", ElectionSystemElectionRoutes);

app.all("*", (request, response, next) => {
    response.render('middlewares/error404')
});

database.connect();

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});