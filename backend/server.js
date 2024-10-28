//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { readdirSync } = require('fs');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

//routes
readdirSync('./routes/').map((r) => app.use('/', require('./routes/' + r)));

//database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connected successfully');
}).catch((err) => {
    console.log('error connecting to mongodb', err);
});

//running server
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log('Server is running on port 8000');
});