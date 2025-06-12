import React, { useState } from "react";
import ForecastCard from "./ForecastCard";
import CurrentWeather from "./CurrentWeather";

const WeatherDashboard = () => {
  const api = {
    key: import.meta.env.VITE_WEATHER_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Dynamic background theme based on weather condition
  const getThemeColor = (condition) => {
    if (!condition) return "bg-gradient-to-br from-gray-200 to-gray-400";

    const cond = condition.toLowerCase();
    if (cond.includes("rain"))
      return "bg-gradient-to-br from-blue-400 to-blue-700";
    if (cond.includes("cloud"))
      return "bg-gradient-to-br from-gray-400 to-gray-600";
    if (cond.includes("clear"))
      return "bg-gradient-to-br from-yellow-300 to-yellow-500";
    if (cond.includes("snow"))
      return "bg-gradient-to-br from-white to-blue-100";
    if (cond.includes("storm"))
      return "bg-gradient-to-br from-purple-700 to-gray-900";
    if (cond.includes("fog") || cond.includes("mist"))
      return "bg-gradient-to-br from-gray-200 to-gray-300";

    return "bg-gradient-to-br from-gray-200 to-gray-400";
  };
  const getTextColor = (condition) => {
    if (!condition) return "text-gray-800";

    const cond = condition.toLowerCase();
    if (cond.includes("clear")) return "text-yellow-900";
    if (cond.includes("snow")) return "text-blue-900";
    if (cond.includes("cloud")) return "text-gray-900";
    if (cond.includes("rain")) return "text-white";
    if (cond.includes("storm")) return "text-white";
    if (cond.includes("fog") || cond.includes("mist")) return "text-gray-700";

    return "text-gray-800";
  };

  const handleClick = async () => {
    if (!inputValue) {
      console.log("Please enter a city name");
      return;
    }

    try {
      // Fetch current weather
      const weatherResponse = await fetch(
        `${api.base}weather?q=${inputValue}&appid=${api.key}&units=metric`
      );
      const weather = await weatherResponse.json();

      if (weather.cod !== 200) {
        console.log("City not found");
        setWeatherData(null);
        setForecastData([]);
        return;
      }

      const extracted = {
        location: weather.name,
        temperature: weather.main.temp,
        condition: weather.weather[0].description,
        humidity: weather.main.humidity,
        windSpeed: weather.wind.speed,
        visibility: weather.visibility / 1000, // convert to km
        feelsLike: weather.main.feels_like,
      };

      setWeatherData(extracted);

      // Fetch forecast data
      const forecastResponse = await fetch(
        `${api.base}forecast?q=${inputValue}&appid=${api.key}&units=metric`
      );
      const forecast = await forecastResponse.json();

      if (forecast.cod !== "200") {
        console.log("Forecast not found");
        setForecastData([]);
        return;
      }

      const dailyData = {};
      forecast.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!dailyData[date]) {
          dailyData[date] = [];
        }
        dailyData[date].push(item);
      });

      const formattedForecast = Object.keys(dailyData)
        .slice(0, 5)
        .map((date) => {
          const entries = dailyData[date];
          const temps = entries.map((e) => e.main.temp);
          const minTemp = Math.min(...temps);
          const maxTemp = Math.max(...temps);
          const condition = entries[0].weather[0].main;
          const icon = entries[0].weather[0].icon;

          return {
            day: getDayName(date),
            high: Math.round(maxTemp),
            low: Math.round(minTemp),
            condition,
            icon,
          };
        });

      setForecastData(formattedForecast);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div
      className={`${getThemeColor(
        weatherData?.condition
      )} min-h-screen py-10 px-4 transition-all duration-500`}
    >
      <div
        className={`bg-white/30 backdrop-blur-md rounded-2xl shadow-xl max-w-4xl mx-auto p-6 ${getTextColor(
          weatherData?.condition
        )}`}
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Weather Dashboard
        </h1>
        <div className="flex justify-center gap-2 mb-8">
          <input
            type="text"
            placeholder="Enter city name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 shadow-sm"
          />
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
          >
            Search
          </button>
        </div>

        {weatherData && (
          <>
            <CurrentWeather
              weatherData={weatherData}
              textColor={getTextColor(weatherData.condition)}
            />

            {/* 5-Day Forecast Section */}
            {forecastData.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  5-Day Forecast
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {forecastData.map((day, index) => (
                    <ForecastCard
                      key={index}
                      day={{
                        day: day.day,
                        icon: day.icon,
                        condition: day.condition,
                        high: `${day.high}°C`,
                        low: `${day.low}°C`,
                      }}
                      textColor={getTextColor(weatherData.condition)}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
