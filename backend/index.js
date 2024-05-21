const express = require('express');
const app = express();

// Routers
const productRouter = require('../backend/api/routes/productroute');
const orderRouter = require('../backend/api/routes/orderroute');

// PORT
const PORT = 5000;
// ------------------------------------------------------------------------------
// JSON Format
app.use(express.json());

// URL Encoded Form
app.use(express.urlencoded({extended: false}));

// Using the Routers
app.use('/api/product', productRouter); // Router for Products
app.use('/api/orders', orderRouter); // Router for Orders

// Test Request...
app.get('/', (req, res)=>{
  res.status(201).json({status: "up & running"});
});

// ------------------------------------------------------------------------------
// Initialise APP/Server
app.listen(PORT, ()=>console.log(`Listening at Port: ${PORT}`));