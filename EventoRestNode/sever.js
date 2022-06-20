const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


require('./src/index')(app);
app.listen(3333); //porta