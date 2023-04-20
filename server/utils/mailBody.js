const billSuccessfulMail = (customer, bill) => {
   return {
      subject: "Bill update from Optic Vision World",
      text: `Greetings from Optic Vision World, ${customer.name}!\n

      Thank you for purchasing from us. Your purchase details are :\n
      Bill no : ${bill.bill_id}\n
      Amount paid : ${bill.amount_paid}\n
      Due Amount : ${bill.balance}\n
      Purchase date: ${bill.generated_date}\n
      
      Have a nice day!`
   }
}

module.exports = {
   billSuccessfulMail
}