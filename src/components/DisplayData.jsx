import React from 'react'
import WeatherForm from './WeatherForm';
import '../App.css';

function DisplayData(props) {

    const {data} = props;
    const iconurl =
    "http://openweathermap.org/img/w/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";

    return (
        <div className="displayWeather">
            <div className="maincard">
                <span className="cardtitle">
                     {data.name},{data.sys.country}
                </span>
            <span className="cardsubtitle">
                 As a {new Date().toLocaleTimeString()}
            </span>
            <h1> Temperature {data.main.temp}</h1>
          
            <img className="weather-icon" src={iconurl}/>
            <span>{data.weather[0].description}</span> 
            <p>{data.message}</p> 
            </div>
            <table>
                <tr>
                    <td>
                       <h4>Sunrise</h4>
                    </td>
                    <td>
                        <span>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Sunset</h4>
                    </td>
                    <td>
                        <span>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Humidity</h4>
                    </td>
                    <td>
                        <span>{data.main.humidity}</span>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default DisplayData
