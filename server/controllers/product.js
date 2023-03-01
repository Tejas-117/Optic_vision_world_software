const db = require("../config/db-config");
const { checkRequiredFields } = require("../utils/requiredFields");

const addProduct = async (req, res, next) => {
   const data = req.body;

   console.log(data);

   // problem --> the string fields are not accepted under not null constraint

   const requiredFields = ['product_code', 'purchase_price', 'selling_price', 'cgst', 'sgst', 'net_price'];
   const missingFields = checkRequiredFields(requiredFields, data);

   // if there are any fields missing from the data, return error
   if(missingFields.length > 0) {
      return res.status(400).json({
         message: `Missing fields: ${missingFields.join(",")}`
      })
   }

   try {
      await db.query(`
         INSERT INTO product 
         (product_code, category, brand, color, size, model_number, quantity, purchase_price, selling_price, cgst, sgst, net_price)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      `, [data.product_code, data.category, data.brand, data.color, data.size, data.model_number, data.quantity, data.purchase_price, data.selling_price, data.cgst, data.sgst, data.net_price]);
   } 
   catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Internal Server Error" });
   }

   return res.status(200).json({ message: "Product added "});
}

module.exports = {
   addProduct
}