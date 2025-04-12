import axios from "axios";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import { useState } from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const onSearch = async (data) => {
    console.log("Temperature details searched for ", data);
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3000/weather/${data}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const weatherData = response.data;
      if (weatherData.status === "success") {
        console.log("Weather data:", weatherData);
        setWeatherData(weatherData.data);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Error fetching weather data:", error);
    }
  };
  return (
    <div className="container py-5 bg-light min-vh-100 text-white">
      <h1 className="display-4 fw-bold mb-5 text-center text-primary text-shadow">
        Weather Dashboard
      </h1>

      <div className="mx-auto" style={{ maxWidth: "600px" }}>
        <SearchBar onSearchHandler={onSearch} />

        {Loading ? (
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <WeatherCard temperatureDetails={weatherData} />
        )}
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
