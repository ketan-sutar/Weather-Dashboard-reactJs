import React from "react";
import { MapPin } from "lucide-react";
import WeatherDetails from "./WeatherDetails";

const getWeatherIcon = (condition) => {
  const icons = {
    sunny: <span className="text-yellow-500 text-4xl">☀️</span>,
    "partly-cloudy": <span className="text-gray-400 text-4xl">🌤️</span>,
    cloudy: <span className="text-gray-500 text-4xl">☁️</span>,
    rainy: <span className="text-blue-500 text-4xl">🌧️</span>,
    snowy: <span className="text-blue-200 text-4xl">❄️</span>,
    stormy: <span className="text-yellow-600 text-4xl">⛈️</span>,
  };
  return icons[condition] || icons["sunny"];
};

const WeatherCard = ({ current }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <MapPin className="w-5 h-5 text-white mr-2" />
        <h2 className="text-xl font-semibold text-white">{current.location}</h2>
      </div>
      <div className="text-white/80 text-sm">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="text-center">
        <div className="mb-4">{getWeatherIcon("partly-cloudy")}</div>
        <div className="text-6xl font-light text-white mb-2">
          {current.temperature}°C
        </div>
        <div className="text-xl text-white/80 mb-4">{current.condition}</div>
        <div className="text-white/70">Feels like {current.feelsLike}°C</div>
      </div>

      <WeatherDetails current={current} />
    </div>
  </div>
);

export default WeatherCard;
