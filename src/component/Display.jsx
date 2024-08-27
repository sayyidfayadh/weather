import React, { useEffect, useState } from "react";
import "./Display.css";
import { TbClock12 } from "react-icons/tb";
import { FaLeaf } from "react-icons/fa";

function Display({ weatherDetails, aqid, country }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (weatherDetails && aqid && country) {
      // Time conversion from Unix timestamp
      const timezoneOffset = weatherDetails.city.timezone; // Timezone offset from UTC
      const unitimestamp = weatherDetails.list[0].dt; // Unix time
      const localTime = new Date((unitimestamp - timezoneOffset) * 1000);
      setTime(localTime.toLocaleDateString("en-IN"));
    }
  }, [weatherDetails, aqid, country]);

  if (!weatherDetails || !aqid || !country) {
    return <p>Loading Weather Report....</p>;
  }

  return (
    <>
      <div className="main1">
        
          <div className="tw2 mt-5">
            <h3 className="">
              {country[0].name}({country[0].country}){" "}
            </h3>
           
            <h6>{time}</h6>
          
        </div>

        
          <div className="tw">
            <h1 className="">
            <img
                src={`https://openweathermap.org/img/wn/${weatherDetails.list[0].weather[0].icon}.png`}
                alt=""
              />
              {weatherDetails.list[0].main.temp.toFixed()}°C{" "}
            </h1>
            <h6 className="">
              
               {weatherDetails.list[0].weather[0].description}{" "}
            </h6>
            <h4>         <FaLeaf />   {aqid?.list[0]?.main?.aqi
              ? `AQI: ${aqid.list[0].main.aqi}`
              : "AQI data not available"}{" "}</h4>
          </div>
        

         
            <div className="tw3 mt-5">
              <table>
                <tr>
                  <td>
                    <tr>Temp(min/max)</tr>
                  </td>
                  <td>
                    {weatherDetails.list[0].main.temp_min.toFixed()}°/
                    {weatherDetails.list[0].main.temp_max.toFixed()}°
                  </td>
                </tr>
                <tr>
                  <td>humidity</td>
                  <td>{weatherDetails.list[0].main.humidity}%</td>
                </tr>
                <tr>
                  <td>Wind</td>
                  <td>{weatherDetails.list[0].wind.speed}m/s</td>
                </tr>
              </table>
            </div>
         
        </div>
    
    </>
  );
}

export default React.memo(Display);
