import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d3c0b943af85c37735df59197b00433b";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();

        if (jsonResponse.cod !== 200) {
            throw new Error("City not found");
        }

        let result = {
            temp: (jsonResponse.main.temp - 273).toFixed(2),
            city: city,
            humidity: jsonResponse.main.humidity,
            minTemp: (jsonResponse.main.temp_min - 273).toFixed(2),
            maxTemp: (jsonResponse.main.temp_max - 273).toFixed(2),
            feelsLike: (jsonResponse.main.feels_like - 273).toFixed(2),
            weather: jsonResponse.weather[0].description,
        };
        return result;
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            let newInfo = await getWeatherInfo();
            setError(false);  // ✅ Reset error on successful fetch
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange} 
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{ color: 'red' }}>No such place exists!</p>}
            </form>
        </div>
    );
}
