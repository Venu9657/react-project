import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import {useState} from "react";
export default function WeatherApp(){
    let [weather,setWeather] = useState({
        city
: 
"Delhi",
feelsLike
: 
24.5,
humidity
: 
59,
maxTemp
: 
304.25,
minTemp
: 
304.25,
temp
: 
304.25,
weather
: 
"clear sky",
    
    })
    let updateInfo = (newInfo) => {
        setWeather(newInfo);
    }
    return (
        <div>
            <h2>Weather by delta app</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weather}/>
        </div>
    )
}