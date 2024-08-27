import React from "react";
import "./Forecast.css";

import { TbClock24 } from "react-icons/tb";
function Forecast({ weatherDetails, aqid, country }) {
  if (!weatherDetails || !aqid || !country) {
    return <p>Loading Weather Report....</p>;
  }
  // console.log();
  // console.log(aqid);

  return (
    <div>
      <h4 className="text-light mt-4">
        {" "}
        <TbClock24 />
        3 hour Forecast
      </h4>
      <div className="row">
        
        <div className="col">
          <h6>{weatherDetails?.list[1].dt_txt.slice(11, 16)}</h6>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDetails.list[1].weather[0].icon}.png`}
            alt=""
          />{" "}
          <h3>{weatherDetails?.list[1]?.main.temp.toFixed()}°C</h3>
          <h6>{weatherDetails.list[1].weather[0].description}</h6>
        </div>
        <div className="col">
          <h6>{weatherDetails?.list[2].dt_txt.slice(11, 16)}</h6>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDetails.list[2].weather[0].icon}.png`}
            alt=""
          />{" "}
          <h3>{weatherDetails?.list[2]?.main.temp.toFixed()}°C</h3>
          <h6>{weatherDetails.list[2].weather[0].description}</h6>
        </div>
        <div className="col">
          <h6>{weatherDetails?.list[3].dt_txt.slice(11, 16)}</h6>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDetails.list[3].weather[0].icon}.png`}
            alt=""
          />{" "}
          <h3> {weatherDetails?.list[3]?.main.temp.toFixed()}°C</h3>
          <h6>{weatherDetails.list[3].weather[0].description}</h6>
        </div>
        <div className="col">
          <h6>{weatherDetails?.list[4].dt_txt.slice(11, 16)}</h6>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDetails.list[4].weather[0].icon}.png`}
            alt=""
          />{" "}
          <h3> {weatherDetails?.list[4]?.main.temp.toFixed()}°C</h3>
          <h6>{weatherDetails.list[4].weather[0].description}</h6>
        </div>
        <div className="col">
          <h6>{weatherDetails?.list[5].dt_txt.slice(11, 16)}</h6>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDetails.list[5].weather[0].icon}.png`}
            alt=""
          />{" "}
          <h3> {weatherDetails?.list[5]?.main.temp.toFixed()}°C</h3>
          <h6>{weatherDetails.list[5].weather[0].description}</h6>
        </div>
        <div className="col">
          <h6>{weatherDetails?.list[6].dt_txt.slice(11, 16)}</h6>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDetails.list[6].weather[0].icon}.png`}
            alt=""
          />{" "}
          <h3> {weatherDetails?.list[6]?.main.temp.toFixed()}°C</h3>
          <h6>{weatherDetails.list[6].weather[0].description}</h6>
        </div>
        <div className="col">
          <h6>{weatherDetails?.list[7].dt_txt.slice(11, 16)}</h6>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDetails.list[7].weather[0].icon}.png`}
            alt=""
          />{" "}
          <h3> {weatherDetails?.list[7]?.main.temp.toFixed()}°C</h3>
          <h6>{weatherDetails.list[7].weather[0].description}</h6>
        </div>
        <div className="col">
          <h6>{weatherDetails?.list[8].dt_txt.slice(11, 16)}</h6>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDetails.list[8].weather[0].icon}.png`}
            alt=""
          />{" "}
          <h3> {weatherDetails?.list[8]?.main.temp.toFixed()}°C </h3>
          <h6>{weatherDetails.list[8].weather[0].description}</h6>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Forecast);
