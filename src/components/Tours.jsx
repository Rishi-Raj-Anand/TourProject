import Card from './Card'
function Tours({allTours,removeTour}){
    return(
        <div className='tours w-[90%] flex flex-wrap justify-evenly '>
        {
            allTours.map((ele)=>{
              return <Card  key={ele.id} {...ele} removeTour={removeTour}></Card>
            })
        }
        
        </div>
    )
}


export default Tours;