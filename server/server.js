const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8000;

//

const url = 'mongodb+srv://DBproject:ePVJZ6n9U1RWahgN@qr.uduyoii.mongodb.net/?retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors())


// mongodb

async function connect() {
    try {  
      await mongoose.connect(url);
      console.log(`Connected to mongodb`);
    } catch (error) {
      console.error(`Connection error: ${error}`);
    }
};

connect();

//

const serverRoutes = require('./routes/routes')
app.use('/api/user', serverRoutes);

//

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});