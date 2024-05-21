const getProducts = (req, res)=>{
  try{
    res.status(201).json({status: '/products'});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

const getProduct = (req, res)=>{
  try{
    const id = req.params.id;
    res.status(201).json({status: '/products/:id'});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

const addProduct = (req, res)=>{
  try{
    res.status(201).json({status: 'To POST to /products'});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

const updateProduct = (req, res)=>{
  try{
    res.status(201).json({status: 'to PATCH/PUT to /products/:id'});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

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