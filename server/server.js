import express from 'express';
import cors from 'cors';
import weatherRouter from './Routes/WeatherRoutes.js';
const app  =express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5175','http://localhost:5173','http://localhost:5174']
}));

app.use(weatherRouter);
app.get('/',(req,res)=>{
  res.send('Backend serves the request');
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})