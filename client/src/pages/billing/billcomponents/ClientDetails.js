export default function ClientDetails({name,address,accnumber}) {
    var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return(
        <>
         <section className="mt-5">
      <h2 className="font-bold">Client's Name: </h2>{name}
      <h2 className="font-bold">Client's Address: </h2>{address}
      <h2 className="font-bold">Account number:</h2> {accnumber}
    
      
    </section>
        </>
    )
}