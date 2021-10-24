const connectToMongo = require("./db");
const express = require("express");
const Contact = require("./Model/Contact");
var cors = require('cors');

connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/user_routes', require ('./routes/user_routes'));
app.use('/api/connect-us-routes', require ('./routes/connect-us-routes'));
app.use('/api/createPost', require ('./routes/createPost'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
