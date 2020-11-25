const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose
        .connect("mongodb://electionSystem:election@cluster0-shard-00-00.wr2lp.mongodb.net:27017,cluster0-shard-00-01.wr2lp.mongodb.net:27017,cluster0-shard-00-02.wr2lp.mongodb.net:27017/election_web_app?ssl=true&replicaSet=atlas-atm422-shard-0&authSource=admin&retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => {
            console.log("Connected to database");
        })
        .catch((error) => console.log(error));
};

require('../models/candidate.model');
require('../models/students.model');

module.exports = {
    connect: connectToDatabase,
};