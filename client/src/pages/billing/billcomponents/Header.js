export default function Header({handelPrint}) {
    return(
        <>
         <header className="flex flex-col items-center justify-center mb-5 xl:flex-row ">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4-xl mb-2 ">Optic Vision World</h1>
        </div>
        <div>
          <ul className="flex  items-center justify-evenly space-x-4 ">
          <li> <button onClick={handelPrint}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">PRINT </button></li>
          <li> <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Download </button></li>
          <li> <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send </button></li>
          </ul>
        </div>
      </header>
        </>
    )
}