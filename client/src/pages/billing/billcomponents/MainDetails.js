export default function MainDetails({name,address}){
    return(
        <>
       <section className="flex flex-col items-end justify-end ">
        {/* <input type="text" name="text" id="text" placeholder="Enter the name" required /> */}
<h2 className="text-xl uppercase font-bold" >{name}</h2>
<p><strong>ADDRESS:</strong> {address}</p>

      </section>
        </>

    )
}