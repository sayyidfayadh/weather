import { Form, FormControl } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";
import Display from "./component/Display";
import Forecast from "./component/Forecast";

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [aqid, setAQI] = useState(null);
  const [country, setCountry] = useState(null);
  useEffect(() => {
    weatherfetch();
  }, []);

  const weatherfetch = async () => {
    if (searchCity == "") {
      getLocation();
    } else {
      getCityCoordinates();
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          cityname(latitude, longitude);
          fetchWeatherByLocation(latitude, longitude);
          fetchAQI(latitude, longitude);
        },
        () => {
          alert("Unable to retrieve your location");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  const fetchWeatherByLocation = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=9&appid=13e27f3a4621c395e299a38afc8175fd`
      );

      const weather = await response.json();

      setWeatherDetails(weather);

      if (!response.ok) {
        throw new Error("Failed to fetch weather");
      }
    } catch {
      alert("Cannot fetch weather now");
    }
  };
  async function getCityCoordinates() {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=1&appid=13e27f3a4621c395e299a38afc8175fd`
    );
    const data = await response.json();
    // console.log(data);
    setCountry(data);
    if (data.length > 0) {
      const { lat, lon } = data[0];
      fetchWeatherByLocation(lat, lon);
      fetchAQI(lat, lon);
    } else {
      throw new Error(`Could not fetch coordinates`);
    }
  }
  // async function fetchWeather(lat,lon){
  //   try{

  //     const response=await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=13e27f3a4621c395e299a38afc8175fd`)
  //     if(!response.ok){
  //       throw new error
  //         }

  //         const weather=await response.json();
  //     setWeatherDetails(weather)

  //  }
  //   catch(error){
  //           alert("Cant fetch weather now")
  //           console.log(error);

  //           setSearchCity("")
  //         }
  // }

  //for pollution aqi
  async function cityname(lat, lon) {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=13e27f3a4621c395e299a38afc8175fd`
    );
    const data = await response.json();
    setCountry(data);
  }

  async function fetchAQI(lat, lon) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=13e27f3a4621c395e299a38afc8175fd`
    );

    const aqi = await response.json();
    // console.log(aqi.list[0].main.aqi);

    setAQI(aqi);
  }

  return (
    <>
      <div className="section">
        <div className="container w-75  text-center">
          <Display
            weatherDetails={weatherDetails}
            aqid={aqid}
            country={country}
          />
          <input
            type="text"
            onChange={(e) => setSearchCity(e.target.value)}
            className="input form-control w-100"
            placeholder="Find City"
          />
          <button className=" btn w-25 rounded-pill" onClick={weatherfetch}>
            Get weather
          </button>
          <Forecast
            weatherDetails={weatherDetails}
            aqid={aqid}
            country={country}
          />
        </div>
      </div>
    </>
  );
}

export default App;
