import React from "react"
export default function Some({list,total}) {
    return(
       <>
        <table width="100%">
       <thead>
                    <tr className="bg-gray-50 p-1">
                        <td className="font-bold ">Item description</td>
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
        <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
           Total ${total}
        </h2>
      </div>
       </>
    )
}