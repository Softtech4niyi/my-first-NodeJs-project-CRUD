const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

const app = express();


//middleware
app.use(express.json());


//routes
app.use('/products', productRoute);


app.listen(3000, () =>{
    console.log('Listening on port 3000...');
});

mongoose.connect(
  'mongodb+srv://softtech4niyi_db_user:plgxZ6V7CWPDKC5B@fooddey-backend.hvy5buy.mongodb.net/fooddey?retryWrites=true&w=majority'
).then(() => {
  console.log('Connected to the Database!');
})
.catch((err) => {
  console.log('Connection to DB failed!', err);
});

