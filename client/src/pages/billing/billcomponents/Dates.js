export default function Dates({invoicenumber,invoicedate}) {
    return(
        <>
         <article className="my-5 flex items-end justify-end ">
      <ul>
        <li><span className="font-bold">Invoice Number:</span> {invoicenumber}</li>
        <li><span className="font-bold">Invoice Date: </span>{invoicedate}</li>
        {/* <li><span className="font-bold">Due Date:</span></li> */}
      </ul>
    </article>
        </>
    )
}