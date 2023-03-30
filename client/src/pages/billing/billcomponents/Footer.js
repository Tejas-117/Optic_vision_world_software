export default function Footer({name,address,email,phno,accnumber}) {
    return(
        <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
         <li><span className="font-bold gap-10">name:</span>{name}
         </li>
         <li><strong>email:</strong>{email}
         </li>
         <li><strong>ph number:</strong>{phno}
         </li>
         <li><strong>Bank:</strong>HDFC
         </li>
         <li><strong>Account holder:</strong>{name}
         </li>
         <li><strong>Account number:</strong>{accnumber}
         </li>
         <li><strong>website:</strong>whatever.com
         </li>
        </ul>
     
     
         </footer>
    )
}
