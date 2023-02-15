import React from "react"
import {v4 as uuidv4} from "uuid"
export default function TableForm({description,setdescription,price,setprice,amount,setamount,quantity,setquantity,list,setList}){
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newItems={
        id: uuidv4(),
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
    const calc =(amount) =>{
    setamount(quantity*price)
   }
    return(
        <>
       <form onSubmit={handleSubmit} >
       <div className="flex flex-col">
       <label htmlFor="description">Item description</label>
        <input type="text" name="description" id="description"
        placeholder="Item description" value={description} onChange={(e) => setdescription(e.target.value)} />
       </div>
       <div className="flex flex-col">
       <label htmlFor="quantity">Item quantity</label>
        <input type="text" name="quantity" id="quantity"
        placeholder="Item quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} />
       </div>
       <div className="flex flex-col">
       <label htmlFor="price">Item price</label>
        <input type="text" name="price" id="price"
        placeholder="Item price" value={price} onChange={(e) => setprice(e.target.value)} />
       </div>
       <div className="flex flex-col">
      <label hrmlFor="amount">Amount</label>
      <p>{calc(amount)}</p>
      </div>
      <button type="submit"  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">Add Item</button>
       </form>
       {/* Table items */}
       
       <table width="100%">
       <thead>
                    <tr className="bg-gray-100 p-1">
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

                        <td>{amount}</td>



                    </tr>
                </tbody>
                </React.Fragment></>
        ))}
        </table>
       
        </>
    )
}