const getOrders = (req, res)=>{
  try{
    res.status(201).json({status: "All orders fetched"});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

const getOrder = (req, res)=>{
  try{
    const id = req.params.id;
    res.status(201).json({status: "Particular order fetched",
    id: id
    });
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

const addOrder = (req, res)=>{
  try{
    res.status(201).json({status: "Order Added"});
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

const updateOrder = (req, res)=>{
  try{
    const id = req.params.id;
    res.status(201).json({status: "Order Updated",
      id: id
    });
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

const deleteOrder = (req, res)=>{
  try{
    const id = req.params.id;
    res.status(201).json({status: "Product Deleted",
      id: id
    });
  }catch(err){
    res.status(500).json({status: err.message});
  }
}

module.exports = {
  getOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder
}