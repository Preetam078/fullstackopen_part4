const express = require("express"); 
const cors = require("cors");
const app = express(); 
const logger = require("./util/logger");
const mongoose = require("mongoose")
const config = require("./util/config")
const blogRouter = require("./controllers/blogs")

app.use(express.json()); 
app.use(cors()); 

const mongoConnection = async () => {

   await mongoose.connect(config.MONGO_URL)
    logger.info(`connected to the mongo DB`)
}

mongoConnection();


app.use("/api/blogs", blogRouter)


module.exports = app;