export default function Dates({invoicenumber,invoicedate}) {
    return(
        <>
         <article className="my-5 flex items-end justify-end ">
      <ul>
        <li><span className="font-bold">Invoice Number: {invoicenumber}</span>asdf</li>
        <li><span className="font-bold">Invoice Date: {invoicedate}</span></li>
        <li><span className="font-bold">Due Date:</span></li>
      </ul>
    </article>
        </>
    )
}