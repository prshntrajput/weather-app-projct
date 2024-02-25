import React, { useState } from 'react'

const Info = ({ data }) => {
  return (
    <div className="text-white w-full h-[88vh] py-2">
      <div>
        <h1 className="text-white lg:text-lg  text-center font-semibold">
          {data.name} {data.main?.temp < 20 ? <h1 className="lg:text-6xl text-2xl"><i class="ri-sun-cloudy-fill text-blue-600"></i></h1> :(data.main?.temp > 20 ) ? <h1 className='text-2xl'><i className="ri-sun-fill text-yellow-400"></i></h1> : ""}
        </h1>
        <div className="mt-3 lg:mx-[34%] lg:flex lg:flex-col flex mx-[4%] flex-col gap-2 lg:mt-6">
          <h1 className="text-white text-base mx-5 font-semibold">TEMPRATURE : {data.main?.temp}</h1>
          <h1 className="text-white text-base mx-5 font-semibold">MIN-TEMP : {data.main?.temp_min}</h1>
          <h1 className="text-white text-base mx-5 font-semibold">MAX-TEMP : {data.main?.temp_max}</h1>
          <h1 className="text-white text-base mx-5 font-semibold">HUMIDITY : {data.main?.humidity}</h1>
          <h1 className="text-white text-base mx-5 font-semibold">FEELS-LIKE : {data.main?.feels_like}</h1>
          <h1 className="text-white text-base mx-5 font-semibold">DESCRIPTION : {data.weather?.[0]?.description.toUpperCase()}</h1>
        </div>
        <p className="text-center lg:mt-4 mt-2 text-sm lg:text-base">The weather can be described as scattered clouds and feels like <i className="ri-celsius-fill text-white text-2xl"></i></p>
      </div>
    </div>
  )
}

export default Info;