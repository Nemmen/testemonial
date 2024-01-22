import React from "react";
import { FaAnglesDown  } from "react-icons/fa6";
const Cards = (props) => {
    const review = props.review
    return(
        <div className="flex flex-col md:relative bg-white mt-[30px] rounded-md py-4 px-8">
            <div className="mx-auto mt-[20px]">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" src={review.image}/>
            </div>
            <div className="text-center mt-7"><h4 className="font-bold text-2xl capitalize " >{review.name}</h4></div>
            <div className="text-center mt-2">
                <h5 className="text-violet-400 capitalize ">{review.job}</h5>
            </div>
            <div className="text-violet-400 my-3 mx-auto">
            <FaAnglesDown />
            </div>
            <div><p className="reviewer">{review.text}</p></div>
           
        </div>
    )
}

export default Cards;