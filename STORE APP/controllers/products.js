const { match } = require("assert");
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, numericFilters, fields } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, key, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [key]: Number(value) };
      }
      console.log(queryObject[field]);
      
    });
  }

  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if(fields){
    const fieldsList = fields.split(',').join(' ')
    result = result.select(fieldsList)
  }
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 5
  const skip = (page - 1) * limit
  result = result.skip(skip).limit(limit)
  const products = await result;
  res.status(200).json({ products, count: products.length });
};

const getSingleProduct = async(req, res) => {
  const {id:productId} = req.params
  const product = await Product.findOne({_id:productId})
  res.status(200).json({product})
}

const createProduct = async(req, res) =>{
  const product = await Product.create({...req.body})
  res.status(201).json({product})
}

const updateProduct = async(req, res) => {
  const {id} = req.params
  const product = await Product.findByIdAndUpdate({_id:id}, req.body,
    {new:true, runValidators:true}
  )
  res.status(201).json({product})
}

const deleteProduct = async(req, res) => {
  const {id} = req.params
  const product = await Product.findByIdAndDelete({_id:id})
  res.status(200).send('successfully deleted')
}


module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
};

