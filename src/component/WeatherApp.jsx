import React, { useState } from 'react'
import Searchbox from './Searchbox'
import InfoBox from './InfoBox'

const WeatherApp = () => {
    const[weatherInfo,setweatherInfo]=useState({
        city:"Delhi",
        feelslike:26.66,
        humidity:21,
        temp:27.84,
        tempMax:28.05,
        tempMin:27.84,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    };

  return (
    <div>
      <h1 style={{textAlign:'center', color:"red"}}>Weather App created by Tauqueer</h1>
      <Searchbox updateInfo={updateInfo}/>
      <InfoBox Info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
