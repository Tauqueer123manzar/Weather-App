import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Searchbox.css';

const Searchbox = ({updateInfo}) => {
    let[city, setCity] = useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_Key="e2a776b09a07e2efd74c5a27490a972e";

    let getweatherinfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city} &appid=${API_Key}&units=metric`);
            let jsonResponse=await response.json();
            let result={
              city:city,
              temp:jsonResponse.main.temp,
              tempMin:jsonResponse.main.temp_min,
              tempMax:jsonResponse.main.temp_max,
              humidity:jsonResponse.main.humidity,
              feelsLike:jsonResponse.main.feels_like,
              weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getweatherinfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true)
        }
    };

    return (
        <div className='searchbox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br/><br/>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such places exists API</p>}
            </form>
        </div>
    );
}

export default Searchbox;
