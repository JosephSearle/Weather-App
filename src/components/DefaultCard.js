import '../App.css'
import {Box} from '@mui/material';
import searchLocation from '../images/default_card_imgs/map.png'

function DefaultCard() {

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
            <img src={searchLocation} alt='search map icon' className='search-icon'/>
            <div className='text-container'>
                <p>Type in a location</p>
                <p>to find out what the weather</p>
                <p>is like in that area</p>
            </div>
        </Box>
    )
}

export default DefaultCard;