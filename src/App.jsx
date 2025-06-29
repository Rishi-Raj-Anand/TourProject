import { useState } from 'react'
import './App.css'
import data from "./data.js"
import Tours  from './components/Tours'

const App = ()=> {
  const[tours,handleTours]=useState(data);

  function removeTour(Id){
    const newTours=tours.filter((tour)=>{return tour.id!==Id});
    handleTours(newTours);

  }
 
  if(tours.length===0){
    return(
      <div className="Refresh-page w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-1">
        <p className='text-2xl'>No Tours Left</p>
        <button className='w-[10rem] rounded-[2px] p-2 bg-[#e4dfdf] hover:cursor-pointer hover:bg-[#c8c6c6] duration-150' onClick={()=>{handleTours(data)}}>
          Refresh</button>
      </div>
    )
  }

  return (
    <div className='Tour-page w-[100%] flex flex-col items-center '>
      <div className="heading m-10 text-7xl">Tours</div>
      <Tours  allTours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App
