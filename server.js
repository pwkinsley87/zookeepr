const express = require('express');
const router = require('express').Router();
const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended:true }));
// parse incoming JSON data 
app.use(express.json());
app.use('./routes/apiRoutes', apiRoutes);
// app.use('./routes/htmlRoutes', htmlRoutes);

app.use(express.static('public'));

router.listen( PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


module.exports = router;
module.exports = app;
module.exports = listen;



