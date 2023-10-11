import { Box, Typography } from "@mui/material";
import brokenClouds from '../images/weather_icons/broken_clouds.png'
import thunderClouds from '../images/weather_icons/thunder_storm.png'
import clearSky from '../images/weather_icons/clear_sky.png'
import snow from '../images/weather_icons/snow.png'
import showerRain from '../images/weather_icons/shower_rain.png'
import mist from '../images/weather_icons/mist.png'
import rain from '../images/weather_icons/rain.png'
import WavesIcon from '@mui/icons-material/Waves';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { blue, orange, red } from '@mui/material/colors';

import '../App.css'

function WeatherCard(props) {
    const weatherIcons = new Map([
        ["Clouds", brokenClouds],
        ["Thunderstorm", thunderClouds],
        ["Clear", clearSky],
        ["Snow", snow],
        ["Drizzle", showerRain],
        ["Rain", rain],
        ["Mist", mist],
        ["Smoke", mist],
        ["Haze", mist],
        ["Dust", mist],
        ["Fog", mist],
        ["Sand", mist],
        ["Ash", mist],
        ["Squall", mist],
        ["Tornado", mist]
    ]);

    return (
        <Box sx={{
            width: '400px',
            height: '550px',
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '50px',
        }}
        className="weather-container"
        >
            <div className="title">
                <Typography variant="h2" sx={{marginTop:'20px'}}>
                    {props.weatherData.loc}
                </Typography>
                <Typography variant="h6">
                    {props.weatherData.timezone}
                </Typography>
            </div>
            <img className="weather-icon" src={weatherIcons.get(props.weatherData.icon)} alt="weatherIcon"/>
            <div className="temp-container">
                <ThermostatIcon fontSize="large" sx={{ color: red[400] }} />
                <Typography variant="h2">
                    {props.weatherData.temp.toFixed(0)}°C
                </Typography>
            </div>
            <div className="details-container">
                <div className="humidity-container">
                    <WavesIcon fontSize="large" sx={{color: orange[300]}}/>
                    <Typography variant="h6">
                        Humidity: {props.weatherData.humidity}
                    </Typography>
                </div>
                <div className="wind-container">
                    <AirIcon fontSize="large" sx={{color: blue[300]}}/>
                    <Typography variant="h6">
                        Wind: {props.weatherData.wind}
                    </Typography>
                    
                </div>
            </div>
            
            
        </Box>
    )
}

export default WeatherCard;