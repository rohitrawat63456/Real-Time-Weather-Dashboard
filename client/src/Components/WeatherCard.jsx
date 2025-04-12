import { WiStrongWind, WiHumidity, WiDaySunny, WiThermometer } from "react-icons/wi";
import { FaCity, FaFlag } from "react-icons/fa";

export const WeatherCard = ({ temperatureDetails }) => {
  console.log("Temperature details in WeatherCard:", temperatureDetails);

  return (
    <>
      {!temperatureDetails ? (
        <p className="text-center text-muted">Details will be shown here</p>
      ) : (
        <div
          className="card text-white bg-dark shadow-lg rounded-4 mx-auto mt-4"
          style={{ maxWidth: "30rem" }}
        >
          <div className="card-header bg-primary text-white text-center fw-bold fs-4 rounded-top">
             Weather Details
          </div>
          <div className="card-body px-4 py-3">
            <p className="card-text d-flex align-items-center mb-2">
              <FaCity className="me-2 text-info fs-5" />
              <strong>City:</strong>&nbsp; {temperatureDetails.city}
            </p>
            <p className="card-text d-flex align-items-center mb-2">
              <FaFlag className="me-2 text-warning fs-5" />
              <strong>Country:</strong>&nbsp; {temperatureDetails.country}
            </p>
            <p className="card-text d-flex align-items-center mb-2">
              <WiThermometer className="me-2 text-danger fs-3" />
              <strong>Temperature:</strong>&nbsp; {temperatureDetails.temperature}°C
            </p>
            <p className="card-text d-flex align-items-center mb-2">
              <WiDaySunny className="me-2 text-warning fs-3" />
              <strong>Description:</strong>&nbsp; {temperatureDetails.description}
            </p>
            <p className="card-text d-flex align-items-center mb-2">
              <WiHumidity className="me-2 text-info fs-3" />
              <strong>Humidity:</strong>&nbsp; {temperatureDetails.humidity}%
            </p>
            <p className="card-text d-flex align-items-center mb-2">
              <WiStrongWind className="me-2 text-light fs-3" />
              <strong>Wind Speed:</strong>&nbsp; {temperatureDetails.windSpeed} km/h
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
