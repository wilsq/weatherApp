import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const apiKey = process.env.API_KEY;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { weather: null });
});

app.post("/", async (req, res) => {
  const city = req.body.city;
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const weatherData = response.data;
    const icon = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const weatherCity = `${weatherData.name}`;
    const weather = `${weatherData.weather[0].description} - ${weatherData.main.temp}C`;
    res.render("index.ejs", { weather, iconUrl, weatherCity });
  } catch (error) {
    let errorMessage = "Could no fetch weather. Please try again.";
    if (error.response && error.response.status === 404) {
      errorMessage = "City not found. Please try again.";
    }
    res.render("index.ejs", {
      weather: errorMessage,
      iconUrl: null,
      weatherCity: null,
    });
  }
});

app.listen(port, () => {
  console.log(`server is listening port ${port}`);
});
