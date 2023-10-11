import { render, screen } from '@testing-library/react'
import WeatherCard from '../components/WeatherCard'
import brokenClouds from '../images/weather_icons/broken_clouds.png'
import thunderClouds from '../images/weather_icons/thunder_storm.png'
import clearSky from '../images/weather_icons/clear_sky.png'
import snow from '../images/weather_icons/snow.png'
import showerRain from '../images/weather_icons/shower_rain.png'
import mist from '../images/weather_icons/mist.png'
import rain from '../images/weather_icons/rain.png'

const mockData = [
    {
        loc: "London",
        timezone: "Europe/London",
        icon: "Clouds",
        temp: 19,
        humidity: 84,
        wind: 5.66,
    },
    {
        loc: "Los Angeles",
        timezone: "America/Los_Angeles",
        icon: "Clear",
        temp: 32,
        humidity: 104,
        wind: 3.45,
    },
]

const weatherImages = [
    {
        loc: "",
        timezone: "",
        icon: "Clouds",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Thunderstorm",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Clear",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Snow",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Drizzle",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Rain",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Mist",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Smoke",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Haze",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Dust",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Fog",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Sand",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Ash",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Squall",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
    {
        loc: "",
        timezone: "",
        icon: "Tornado",
        temp: 0,
        humidity: 0,
        wind: 0,
    },
]

test("Fixed data renders successfully", () => {
    render(<WeatherCard weatherData={mockData[0]} />)

    expect(screen.getByText(/Humidity:/i)).toBeInTheDocument()
    expect(screen.getByText(/Wind:/i)).toBeInTheDocument()
    expect(screen.getByText(/°C/i)).toBeInTheDocument()
})

test("Weather data 1 renders successfully", () => {
    render(<WeatherCard weatherData={mockData[0]}/>)

    expect(screen.getByText('London')).toBeInTheDocument()
    expect(screen.getByText('Europe/London')).toBeInTheDocument()
    expect(screen.getByAltText('weatherIcon').src).toContain(brokenClouds)
    expect(screen.getByText(/19/i)).toBeInTheDocument()
    expect(screen.getByText(/84/i)).toBeInTheDocument()
    expect(screen.getByText(/5.66/i)).toBeInTheDocument()
})

test("Weather data 2 renders successfully", () => {
    render(<WeatherCard weatherData={mockData[1]}/>)

    expect(screen.getByText('Los Angeles')).toBeInTheDocument()
    expect(screen.getByText('America/Los_Angeles')).toBeInTheDocument()
    expect(screen.getByAltText('weatherIcon').src).toContain(clearSky)
    expect(screen.getByText(/32/i)).toBeInTheDocument()
    expect(screen.getByText(/104/i)).toBeInTheDocument()
    expect(screen.getByText(/3.45/i)).toBeInTheDocument()
})

test("Clouds image renders successfully", () => {
    render(<WeatherCard weatherData={weatherImages[0]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(brokenClouds)
})

test("Thunderstorm image renders successfully", () => {
    render(<WeatherCard weatherData={weatherImages[1]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(thunderClouds)
})

test("Clear sky image renders successfully", () => {
    render(<WeatherCard weatherData={weatherImages[2]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(clearSky)
})

test("Snow image renders successfully", () => {
    render(<WeatherCard weatherData={weatherImages[3]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(snow)
})

test("Shower rain image renders successfully", () => {
    render(<WeatherCard weatherData={weatherImages[4]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(showerRain)
})

test("Rain image renders successfully", () => {
    render(<WeatherCard weatherData={weatherImages[5]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(rain)
})

test("Mist image renders with Mist data successfully", () => {
    render(<WeatherCard weatherData={weatherImages[6]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(mist)
})

test("Mist image renders with Smoke data successfully", () => {
    render(<WeatherCard weatherData={weatherImages[7]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(mist)
})

test("Mist image renders with Haze data successfully", () => {
    render(<WeatherCard weatherData={weatherImages[8]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(mist)
})

test("Mist image renders with Dust data successfully", () => {
    render(<WeatherCard weatherData={weatherImages[9]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(mist)
})

test("Mist image renders with Fog data successfully", () => {
    render(<WeatherCard weatherData={weatherImages[10]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(mist)
})

test("Mist image renders with Sand data successfully", () => {
    render(<WeatherCard weatherData={weatherImages[11]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(mist)
})

test("Mist image renders with Ash data successfully", () => {
    render(<WeatherCard weatherData={weatherImages[12]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(mist)
})

test("Mist image renders with Squall data successfully", () => {
    render(<WeatherCard weatherData={weatherImages[13]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(mist)
})

test("Mist image renders with Tornado data successfully", () => {
    render(<WeatherCard weatherData={weatherImages[14]}/>)

    expect(screen.getByAltText('weatherIcon').src).toContain(mist)
})