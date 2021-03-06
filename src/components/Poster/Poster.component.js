import React from "react";

const Poster = (props) => {
  
    return (
        <>
        <div className="w-full h-full">
        <div className="w-15 h-30 p-4">
        <img src={props.src} className="w-full h-full rounded-xl"/>
       </div>

       <h3
        className={`text-lg font-bold ${
          props.isDark ? "text-white" : "text-gray-800"
        }`}
       >
        {props.title}
       </h3>

       <p
       className={`text-sm font-bold ${
         props.isDark ? "text-white" : "text-gray-700"
       }`}
       >
           {props.subtitle}
       </p>
        </div>
        </>
    )
};

export default Poster;