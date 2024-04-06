import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';
const InfoBox = ({ Info }) => {
  const INIT_URl = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=1024x1024&w=is&k=20&c=FzBhkGLI-zWZ36jW-uKKSeJJcFSNLFJ0b_kWmGlscuk=";
  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL = "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className='InfoBox'>
      <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={Info.humidity > 80
              ? RAINY_URL
              : Info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent className='cardcontent'>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city}
              {Info.humidity > 80
                ? <ThunderstormIcon />
                : Info.temp > 15
                  ? <WbSunnyIcon />
                  : <AcUnitIcon />
              }
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>City:{Info.city}</p>
              <p>Temperature={Info.temp}&deg;C</p>
              <p>Humidity:{Info.humidity}</p>
              <p>TempMax:{Info.tempMax}</p>
              <p>TempMin:{Info.tempMin}</p>
              <p>FeelsLike:{Info.feelslike}</p>
              <p>The weather can be described as {Info.weather} and feels like {Info.feelslike}&deg;C</p>
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  )
}

export default InfoBox
