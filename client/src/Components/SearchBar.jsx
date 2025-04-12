import { useRef } from "react";
import {toast} from 'react-toastify';
const SearchBar = ({ onSearchHandler }) => {
  const searchCity = useRef(null);

  return (
    <div className="d-flex gap-3 bg-info p-4 rounded shadow">
      <input
        type="text"
        placeholder="Enter your city"
        ref={searchCity}
        className="form-control bg-light text-blue border-0"
      />
      <button
        onClick={() => {
          if(!searchCity.current.value) {
            toast.error("Please enter a city name");
            return;
          }
          onSearchHandler(searchCity.current.value);
          searchCity.current.value = "";
        }}
        className="btn btn-primary fw-semibold"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
