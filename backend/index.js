const express = require('express');
const app = express();

// Routers
const productRouter = require('../backend/api/routes/productroute');
const orderRouter = require('../backend/api/routes/orderroute');

const PORT = 5000;
// ------------------------------------------------------------------------------
// JSON Format
app.use(express.json());

// URL Encoded Form
app.use(express.urlencoded({extended: false}));

app.use('/api/product', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res)=>{
  res.status(201).json({status: "up & running"});
});

// ------------------------------------------------------------------------------
app.listen(PORT, ()=>console.log(`Listening at Port: ${PORT}`));