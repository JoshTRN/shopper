const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shopper');

if (process.env.NODE_ENV === 'production') app.use(express.static('client/build'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`));