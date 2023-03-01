// utility function to check if the required fields are included in data
// params: fields -> required fields, data -> data object representing request body
// return: all the missing required fields
function checkRequiredFields (fields, data) {
   const missingFields = [];

   fields.forEach(field => {

      // if the required property is missing from the data or the value is empty string
      // add it to missingFields.

      const value = data[field];
      
      if(!data.hasOwnProperty(field) || value.toString().length === 0) {
         missingFields.push(field);
      }
      
   });

   return missingFields;
}

module.exports = { checkRequiredFields };