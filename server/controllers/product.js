const db = require("../config/db-config");
const { checkRequiredFields } = require("../utils/requiredFields");

// GET all products
const getAllproducts = async (req, res, next) => {
   let allProducts = {};

   try {
      const { rows } = await db.query(`
         SELECT product.*, product_category.name AS category
         FROM product
         JOIN product_category
         ON product.category = product_category.category_id;
      `, []);

      allProducts = rows;
   } 
   catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Products retrieved successfully", data: allProducts })
}

// GET a product by its id or product_code
const getProduct = async (req, res, next) => {
   const { id: productId } = req.params;
   const {  product_code: productCode } = req.query;
   let product = {};

   try {
      const { rows } = await db.query(`
         SELECT * FROM product WHERE product_id = $1 OR product_code LIKE '%${productCode}%'
      `, [productId]);
      product = rows[0];
   } 
   catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Products retrieved successfully", data: product })
}

// ADD a new product
const addProduct = async (req, res, next) => {
   const data = req.body;

   const requiredFields = ['product_code', 'purchase_price', 'selling_price', 'cgst', 'sgst', 'net_price', 'name'];
   const missingFields = checkRequiredFields(requiredFields, data);

   // if there are any fields missing from the data, return error
   if(missingFields.length > 0) {
      return res.status(400).json({
         message: `Missing fields: ${missingFields.join(",")}`
      })
   }

   try {
      // TODO: avoid adding product with duplciate product_code

      await db.query(`
         INSERT INTO product 
         (product_code, category, brand, color, size, model_number, quantity, purchase_price, selling_price, cgst, sgst, net_price, name)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      `, [data.product_code, data.category, data.brand, data.color, data.size, data.model_number, data.quantity, data.purchase_price, data.selling_price, data.cgst, data.sgst, data.net_price, data.name]);
   } 
   catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Product added "});
}

// EDIT a existing product
const editProduct = async (req, res, next) => {
   const { productId } = req.params;
   const data = req.body;

   const requiredFields = ['product_code', 'purchase_price', 'selling_price', 'cgst', 'sgst', 'net_price', 'name'];
   const missingFields = checkRequiredFields(requiredFields, data);

   // if there are any fields missing from the data, return error
   if(missingFields.length > 0) {
      return res.status(400).json({
         message: `Missing fields: ${missingFields.join(",")}`
      })
   }

   let queryRes = {};
   
   try {
      const { rows } = await db.query(`
         UPDATE product 
         SET product_code = $1, category = $2, brand = $3, color = $4, size = $5, model_number = $6, quantity = $7, purchase_price = $8, selling_price = $9, cgst = $10, sgst = $11, net_price = $12, name = $13
         WHERE product_id = $14
         RETURNING product_code, name
      `, [data.product_code, data.category, data.brand, data.color, data.size, data.model_number, data.quantity, data.purchase_price, data.selling_price, data.cgst, data.sgst, data.net_price, data.name, productId]);

      queryRes = rows;
   } 
   catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Product added successfully", data: queryRes[0] });
}

// DELETE a product
const deleteProduct = async (req, res, next) => {
   const { productId } = req.params;

   try {
      await db.query(`
         DELETE FROM product WHERE product_id = $1
      `, [productId]);
   } 
   catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Successfully deleted the product", id: productId });
}

module.exports = {
   getAllproducts,
   getProduct,
   addProduct,
   editProduct,
   deleteProduct
}