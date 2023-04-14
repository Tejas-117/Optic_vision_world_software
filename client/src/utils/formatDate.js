
export default function formatDate(dateTimeStr) {
   if(!dateTimeStr){
     return " - - ";
   }

   const date = new Date(dateTimeStr);
   return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}
