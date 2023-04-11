
export default function formatDate(dateTimeStr) {
   const date = new Date(dateTimeStr);
   return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}
