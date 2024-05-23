// CONTROLLERS FOR ORDERS

// -------------------------------------------------------
// Create
const addProduct = (req, res)=>{
  try{
    const product = {
      name: req.body.name,
      price: req.body.price,
    }
    res.status(201).json({status: 'To POST to /products', createdProduct: product});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

// -------------------------------------------------------
// Read

// 1. All Products
const getProducts = (req, res)=>{
  try{
    res.status(201).json({status: '/products'});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

// 2. Product{id}
const getProduct = (req, res)=>{
  try{
    const id = req.params.id;
    res.status(201).json({status: '/products/:id'});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

// -------------------------------------------------------
// Update{id}
const updateProduct = (req, res)=>{
  try{
    res.status(201).json({status: 'to PATCH/PUT to /products/:id'});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

// -------------------------------------------------------
// Delete{id}
const deleteProduct = (req, res)=>{
  try{
    res.status(201).json({status: 'To DELETE from /products/:id'});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
}