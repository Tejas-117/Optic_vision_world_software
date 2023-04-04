import React, {useState,useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete} from "react-icons/ai"
export default function TableForm({description,setdescription,price,setprice,amount,setamount,quantity,setquantity,list,setList,total,setTotal}){
  
    const handleSubmit=(e)=>{
    e.preventDefault()
    const newItems={
        id:uuidv4(),
         description,
          quantity,
         price,
         amount,
    }
    setdescription("")
    setquantity("")
    setprice("")
    setamount("")
    setList([...list,newItems])
  }
  useEffect(() => {
    const calc = (amount) => {
      setamount(quantity * price)
    }

    calc(amount)
  }, [amount, price, quantity, setamount])

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })
   
   const deleteRow = (id) =>{ 
    setList(list.filter((row) => row.id !== id))}
    return(
        <>
       <form onSubmit={handleSubmit} >
       <div className="flex flex-col">
       <label htmlFor="description "className="font-bold mt-1">Item description</label>
        <input type="text" name="description" id="description"
        placeholder="Item description" value={description} onChange={(e) => setdescription(e.target.value)} />
       </div>
       <div className="flex flex-col">
       <label htmlFor="quantity" className="font-bold mt-1">Item quantity</label>
        <input type="text" name="quantity" id="quantity"
        placeholder="Item quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} />
       </div>
       <div className="flex flex-col">
       <label htmlFor="price" className="font-bold mt-1">Item price</label>
        <input type="text" name="price" id="price"
        placeholder="Item price" value={price} onChange={(e) => setprice(e.target.value)} />
       </div>
       <div className="flex flex-col">
      <label hrmlFor="amount" className="font-bold mt-1 mb-1">Amount </label>
      <p>{amount}</p>
      </div>
      <button type="submit"  className="mt-1 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">Add Item</button>
       </form>
       {/* Table items */}
       
       <table width="100%">
       <thead>
                    <tr className="bg-gray-50 p-1">
                        <td className="font-bold">Item description</td>
                        <td className="font-bold">Quantity</td>
                        <td className="font-bold">Price</td>
                        <td className="font-bold">Amount</td>
                    </tr>

                </thead>
        {list.map(({id,description,quantity,price,amount})=>(
            <>
                
            <React.Fragment key={id}>
            
                <tbody>
                    <tr>
                        <td>{description}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>

                        <td className="amount">{amount}</td>
                        <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl" /></button></td>
                    



                    </tr>
                </tbody>
                </React.Fragment></>
        ))}
        </table>
        <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
           Total ${total.toLocaleString()}
        </h2>
      </div>
       
        </>
    )
}
