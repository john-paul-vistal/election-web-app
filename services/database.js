const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose
        .connect("mongodb://Politicians:lastGroup@cluster0-shard-00-00.dnbsx.mongodb.net:27017,cluster0-shard-00-01.dnbsx.mongodb.net:27017,cluster0-shard-00-02.dnbsx.mongodb.net:27017/election?ssl=true&replicaSet=atlas-jjnz94-shard-0&authSource=admin&retryWrites=true&w=majority/election_web_app", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => {
            console.log("Connected to database");
        })
        .catch((error) => console.log(error));
};

module.exports = {
    connect: connectToDatabase,
};