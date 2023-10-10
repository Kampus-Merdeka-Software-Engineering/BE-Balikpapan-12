require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5500;
const classRouter = require('./routes/classRoutes');
const contactRouter = require('./routes/contactRoutes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/class', classRouter);
app.use('/contact', contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});