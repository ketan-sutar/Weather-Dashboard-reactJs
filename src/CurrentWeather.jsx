import React from "react";
import WeatherDetails from "./WeatherDetails";
import { MapPin } from "lucide-react";

const CurrentWeather = ({ weatherData, textColor }) => {
  // Add textColor prop
  if (!weatherData) return null;

  return (
    // Use the passed textColor class
    <div
      className={`bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-lg ${textColor}`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <MapPin className="mr-2" />
          <h2 className="text-lg sm:text-xl font-bold">
            {weatherData.location}
          </h2>{" "}
        </div>
        <div className="text-sm">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-center">
          <div className="text-6xl font-light mb-2">
            {Math.round(weatherData.temperature)}°C
          </div>
          <p className="capitalize text-lg mb-1">{weatherData.condition}</p>
          <p className="text-sm opacity-80">
            Feels like {Math.round(weatherData.feelsLike)}°C
          </p>
        </div>
        <WeatherDetails current={weatherData} textColor={textColor} />
      </div>
    </div>
  );
};

export default CurrentWeather;
