import React, { useState } from 'react'
import weather from "/weather.png"
import Info from "./Info";



const Search = () => {

  const [city,setCity]=useState("");
  const [weatherr,setWeather]=useState({});

  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY ="ec0b15abe34b75e43f2d9f35fac3362c";

  let getWether= async ()=>{
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonresponse= await response.json();
    console.log(jsonresponse)
    setWeather(jsonresponse)


  }




  return (
    <>
    <div className='w-full h-[32vh]'>
      <h1 className='text-white lg:text-3xl text-2xl  font-bold text-center mt-4'>WEATHER APP</h1>
      <div className='lg:w-28 lg:h-14 lg:mx-[45%] lg:mt-8 w-20 h-10 mx-[36%] mt-4 flex justify-center items-center'>
        <img src={weather} alt="" />
      </div>
      <form>
        <div className='lg:w-1/2 w-[80%] mt-6 flex lg:gap-4 gap-2 justify-center lg:mx-[24%] mx-[10%]'>
        <input onChange={(e)=>((setCity(e.target.value),console.log(e.target.value)))} type="text" className='rounded w-full px-6 ' placeholder='search city'/>
        <button type='submit' onClick={(e)=>(e.preventDefault(),setCity(""),getWether())} className='lg:w-24 w-24 font-semibold lg:h-10 h-8 text-xs lg:text-base rounded bg-blue-600 text-white'>Search</button>
        </div>
      </form>
      <Info data={weatherr}/>
    </div>
    </>
  )
}

export default Search