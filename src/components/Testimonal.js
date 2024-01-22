import { useState } from "react";
import React  from "react";
import Cards from "./cards";
import { FaAngleLeft , FaAngleRight  } from "react-icons/fa6";


const Testimonials = (props)=>{
    const [index, setIndex] = useState(0);
    const review = props.Review

    function Left(){
        if( index <= 0){
            setIndex(review.length - 1)
        }
        else{
            setIndex(index - 1)
        }
    }
    function Right(){
        if( index >= review.length - 1){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }
    function random()
        {
            let int = Math.floor(Math.random() * review.length)
            setIndex(int);
        }
    return(
        <div className="w-[305px]">
            <Cards review = {review[index] }/>
            <div className="mt-7">
                <button onClick={Left} className="text-violet-400  cursor-pointer hover:text-violet-500 mx-3">
                <FaAngleLeft />
                </button>
                <button onClick={Right} className="text-violet-400 cursor-pointer hover:text-violet-500 mx-3">
                <FaAngleRight />
                </button>
            </div>
            <div className="mt-7 ">
                <button onClick={random} className=" text-black-300  hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold  bg-violet-600 hover:text-black-500">Suprize me</button>
            </div>
        </div>
    )
}

export default Testimonials;


