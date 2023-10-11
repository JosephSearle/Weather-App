import '../App.css';
import { Box, TextField, IconButton } from '@mui/material';
import WeatherCard from './WeatherCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { setDefaults, fromAddress } from 'react-geocode';
import { useState, useEffect, useRef } from 'react';
import DefaultCard from './DefaultCard';

import ErrorModal from './ErrorModal';


function SearchBar() {
    const [location, setLocation] = useState("");
    const [showDefault, setShowDefault] = useState(true);
    const [errorType, setErrorType] = useState("location");
    const [{lat, lng}, setCoords] = useState({lat: 51.5072, lng: -0.1276});
    const [apiData, setApiData] = useState({
        loc: location,
        timezone: "Europe/London",
        icon: "",
        temp: 0,
        humidity: 0,
        wind: 0,
    });
    const gMapsKey = process.env.REACT_APP_GOOGLE_MAP_KEY
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,daily&units=metric&appid=${apiKey}`

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    setDefaults({
        key: gMapsKey, //Gmaps API Key
        language: "en", // Default language
        region: 'es', // Default region
    });

    async function fetchCoordinates() {
        console.log(`Fetching coordinates for location: ${location}`)
        fromAddress(location)
            .then(response => {
                if (response.status === "OK") {
                    return response;
                }
            })
            .then(data => {
                console.log(`Fetched coordinates for location: ${location}`)
                setCoords(data.results[0].geometry.location)
            })
            .catch(error => {
                setLocation("")
                setErrorType("location")
                handleOpen()
                console.error(`Location: ${location} does not exist: ${error}`)
            })
    }

    async function fetchWeatherData() {
        console.log(`Fetching weather data for location: ${location}, with coords: ${lat}, ${lng}`)
        const response = await fetch(apiUrl)

        if (response.status === 429) {
            setLocation("")
            setErrorType("api")
            handleOpen()
            return console.error(`API calls have reached their limit for today: ${response.status}`)
        }
        
        if (!response.ok) {
            return console.error(`An error has occured: ${response.status}`);
        } 

        if (location !== "") {
            setShowDefault(false)
        }

        const weatherData = await response.json();
        const data = {
            loc: location,
            timezone: weatherData.timezone,
            icon: weatherData.current.weather[0].main,
            temp: weatherData.current.temp,
            humidity: weatherData.current.humidity,
            wind: weatherData.current.wind_speed
        }
        setLocation("")
        setApiData(data)
        console.log(`Fetched weather data for location: ${location}, with coords: ${lat}, ${lng}`)
    }

    const effectRan = useRef(false)
    useEffect(() => {
        if (effectRan.current === false) {
            return () => {effectRan.current = true}
        }
        fetchWeatherData();
    }, [lat, lng])

    return (
        <div className="App-header">
            <Box
            sx={{
                padding: '10px',
                backgroundColor: '#fff',
                borderRadius: '100px',
            }}
            className="container"
            data-testid="box"
            >
                <LocationOnIcon sx={{ color: '#1b1b1b' }} fontSize='large'/>
                <TextField inputProps={{'data-testid': 'search'}} id="standard-basic" placeholder='Type Location' value={location} variant="standard" className='input' onChange={(location) => setLocation(location.target.value)}/>
                <IconButton aria-label="search" onClick={() => fetchCoordinates()}>
                    <SearchIcon sx={{ color: '#1b1b1b' }} fontSize='large'/>
                </IconButton>
            </Box>
            {showDefault ? (
                <div data-testid="default">
                    <DefaultCard />
                </div>
            ) : (
                <div data-testid="weather-card">
                    <WeatherCard weatherData={apiData} />
                </div>
                
            )}
            <div data-testid="error-modal">
                <ErrorModal open={open} handleClose={handleClose} errorType={errorType}/>
            </div>
        </div>
        
    );
}

export default SearchBar