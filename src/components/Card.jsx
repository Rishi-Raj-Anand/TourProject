import { useState } from "react";

function Card({id,name,info,image,price,removeTour}){
    const [readmore,setReadmore]=useState(false);
    const description=readmore?`${info}  `:`${info.substring(0,200)}.... `;

     function readmoreHandler() {
        setReadmore(!readmore);
    }
    return (
        <div className="card flex flex-col  w-[25rem] h-[35rem] mb-5 border-2 rounded-[2rem]  hover:scale-[1.01]">
            <div className="image-box w-[100%] h-[50%]  ">
                <img className="h-[100%] w-[100%] object-center rounded-t-[2rem]" src={image} alt="" />
            </div>
            <div className="tour-detail p-3 h-[40%] mb-1 ">

                <p className="price text-green-700 font-bold text-2xl ">₹ {price}</p>

                <p className="tourName text-[1.8rem] font-bold ">{name}</p>

                <p className="desc text-[1.1rem] mt-1 overflow-scroll h-[70%] py-1 m-b-2">
                    {description}
                    <span className="read-more text-blue-700 cursor-pointer" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>

                </p>
            </div>

            <button className="bg-red-400 cursor-pointer h-[10%] rounded-b-[2rem]" onClick={()=>{
                removeTour(id);
            }}>Not Interested</button>
            
        </div>
    )
}

export default Card;