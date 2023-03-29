import React from "react"
export default function Some({description,quantity,amount,price,list,setList}) {
    return(
       <>
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