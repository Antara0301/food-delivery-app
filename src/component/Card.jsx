import React from 'react';

export const Card=(props) =>{
   console.log(props.resData)

    const  {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        locality
    
      } = props.resData
      console.log(props.avgRating)
    return(
      <div className=" m-4 p-4 w-[260px] card-container bg-gray-300 rounded-md hover:bg-lime-100 shadow-lg">
        
        <div >
        <img  alt="res-logo" className="w-[260px] rounded-lg"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
        </div>
        <div className="card-info">
       <h3 className="font-bold py-2">{name}</h3>
       <h3 className="text-ellipsis whitespace-normal overflow-auto">{cuisines.join(",")}</h3>
       <p>{"⭐️"}{avgRating}</p>
       <p>{costForTwo}</p>
       <p>{locality}</p>
       </div>
      </div>
    )
  }

  //higher order component take Card as input and return CardwithVegLabel as output

  export const CardwithVegLabel=(Card)=>{

    return (props) =>{
      return(
        <div>
          <label className='absolute bg-gray-400 text-white m-4 p-2 w-24 rounded-lg text-center border border-black'>Veg</label>
          <Card {...props}/>
        </div>
      )
    }

  }
