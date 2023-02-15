export default function ClientDetails({name,address,accnumber}) {
    var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return(
        <>
         <section className="mt-5">
      <h2 className="font-bold">Client's Name: {name}</h2>
      <p>Clients address: {address}</p>
      
      
      <p>Account number: {accnumber}</p>
      
      
    </section>
        </>
    )
}