import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const weatherRouter  = express.Router();
weatherRouter.get('/weather/:city',async(req,res)=>{
  try {
    const city = req.params.city;
    if(!city){
      return res.json({
        status: 'error',
        message: 'City name is required'
      });
    }
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`);
    const data = await response.json();
    const weatherDetails = {
      city,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed
    };
    return res.json({
      status: 'success',
      data: weatherDetails
    });
  } catch (error) {
    res.json({
      status: 'error',
      message: error.message
    });
  }
});
export default weatherRouter;