import { useState } from "react"
import ClientDetails from "./billcomponents/ClientDetails"
import MainDetails from "./billcomponents/MainDetails"
import Dates from "./billcomponents/Dates"
import Notes from "./billcomponents/Notes"
import Some from "./billcomponents/Some"
import Footer from "./billcomponents/Footer"
import Header from "./billcomponents/Header"
import TableForm from "./billcomponents/TableForm"
function Bill(){
  const [showInvoice,setShowInvoice] = useState(false)
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [invoicedate,setinvoicedate]=useState("")
  const [invoicenumber,setinvoicenumber]=useState("")
  const [accnumber,setaccnumber]=useState("")
  const [description,setdescription]=useState("")
  const [quantity,setquantity]=useState("")
  const [price,setprice]=useState("")
  const [email,setemail]=useState("")
  const [phno,setphno]=useState("")
  const [amount,setamount]=useState("")
  const [list,setList]=useState([])
  
  const handelPrint = () =>{
window.print()
  }
  return (
    
    <main className="m-5 p-5 xl:max-w-10xl xl:mx-auto bg-white rounded shadow">
      {showInvoice ?(
        
      <div>
     <Header handelPrint={handelPrint}/>
    <MainDetails name={name} address={address}/>
   <ClientDetails name={name} invoicedate={invoicedate} invoicenumber={invoicenumber} accnumber={accnumber}/>
   <Dates invoicenumber={invoicenumber} invoicedate={invoicedate} />
   {/* <Table  />      */}
   <Some description={description} quantity={quantity} amount={amount} price={price} list={list} setList={setList} />
    <Notes />
  
   <Footer name={name} email={email} address={address} phno={phno} accnumber={accnumber}/>
   <button onClick={()=> setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:bg-transparent hover:text-blue-500 transition-all duraction-300">Edit here here</button>
   </div>) :(
   
    <>
    <article className="md:grid grid-cols-2 gap-5">
    <div className="flex flex-col justify-center">
      
      <div className="flex flex-col ">
      <label htmlFor="name" className="font-bold">Enter your name</label>
    <input type="text" name="text" className="mt-2 bg-gray-100"id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="flex flex-col">
    <label htmlFor="name"className="mt-5 font-bold">Enter Phone number</label>
    <input type="text" name="text"className="mt-2 bg-gray-100" id="address" placeholder="Enter number" value={phno} onChange={(e) => setphno(e.target.value)} />
    </div>
   
    </div>
    
  
    
    <div className="flex flex-col justify-center">
  
    <div className="flex flex-col">
    <label htmlFor="name"className="font-bold">Enter Billing address</label>
    <input type="text" className="mt-2 bg-gray-100" name="text" id="address" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
    </div>
    <div className="flex flex-col">
    <label htmlFor="name"className="mt-5 font-bold">Enter email id</label>
    <input type="text" name="text" className="mt-2 bg-gray-100" id="address" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
    </div>
    

    </div>
    </article>
    
    <div className="flex flex-col justify-center">
    <label htmlFor="name"className="mt-5 font-bold">Invoice Date</label>
    <input type="date" className="mt-2 bg-gray-100" name="date" id="address" placeholder="Invoice date" value={invoicedate} onChange={(e) => setinvoicedate(e.target.value)} />
    </div>
    <div className="flex flex-col justify-center">
    <label htmlFor="name"className="mt-5 font-bold">Invoice Number</label>
    <input type="text" className="mt-2 bg-gray-100" name="text" id="address" placeholder="Invoice Number" value={invoicenumber} onChange={(e) => setinvoicenumber(e.target.value)} />
    </div>
    <div className="flex flex-col justify-center">
    <label htmlFor="name"className="mt-5 font-bold">Account Number</label>
    <input type="text" className="mt-2 bg-gray-100 mb-" name="text" id="address" placeholder="Account number" value={accnumber} onChange={(e) => setaccnumber(e.target.value)} />
    
    </div>
     <article>
       <TableForm description={description} setdescription={setdescription} quantity={quantity} setquantity={setquantity} price={price} setprice={setprice} amount={amount} setamount={setamount} 
       setList={setList} list={list}/> 
    </article> 
    <button onClick={()=> setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:bg-transparent hover:text-blue-500 transition-all duraction-300">Print here</button>
    </>
   )}
    </main>
  )
}
export default Bill;