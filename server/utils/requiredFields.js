// utility function to check if the required fields are included in data
// params: fields -> required fields, data -> data object representing request body
// return: all the missing required fields
function checkRequiredFields (fields, data) {
   const missingFields = [];

   fields.forEach(field => {
      if(data.hasOwnProperty(field) === false) {
         missingFields.push(field);
      }
   });

   return missingFields;
}

module.exports = { checkRequiredFields };