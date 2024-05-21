const express = require('express');
const app = express();
const morgan = require('morgan');

// -----------------------------------------------------------------------------
// Routers
const productRouter = require('../backend/api/routes/productroute');
const orderRouter = require('../backend/api/routes/orderroute');

// -----------------------------------------------------------------------------
// PORT
const PORT = 5000;

// ------------------------------------------------------------------------------
// Use Morgan
app.use(morgan('dev'));

// ------------------------------------------------------------------------------
// JSON Format
app.use(express.json());

// URL Encoded Form
app.use(express.urlencoded({extended: false}));

// ------------------------------------------------------------------------------
// Using the Routers
app.use('/api/product', productRouter); // Router for Products
app.use('/api/orders', orderRouter); // Router for Orders

// ------------------------------------------------------------------------------
// User-defined Error (404-Error Logging)

app.use((req, res, next)=>{
  const notFoundError = new Error('Not Found');
  notFoundError.status(404);
  next(notFoundError);
})

app.use((err, req, res, next)=>{
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
})

// ------------------------------------------------------------------------------
// Test Request...
app.get('/', (req, res)=>{
  res.status(201).json({status: "up & running"});
});

// ------------------------------------------------------------------------------
// Initialise APP/Server
app.listen(PORT, ()=>console.log(`Listening at Port: ${PORT}`));