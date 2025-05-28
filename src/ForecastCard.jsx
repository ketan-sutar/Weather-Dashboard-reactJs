import React from "react";

const getWeatherIcon = (condition) => {
  const icons = {
    sunny: <span className="text-yellow-500 text-3xl">☀️</span>,
    "partly-cloudy": <span className="text-gray-400 text-3xl">🌤️</span>,
    cloudy: <span className="text-gray-500 text-3xl">☁️</span>,
    rainy: <span className="text-blue-500 text-3xl">🌧️</span>,
    snowy: <span className="text-blue-200 text-3xl">❄️</span>,
    stormy: <span className="text-yellow-600 text-3xl">⛈️</span>,
  };
  return icons[condition] || icons["sunny"];
};

const ForecastCard = ({ day }) => (
  <div className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer">
    <div className="text-white/80 font-medium mb-3">{day.day}</div>
    <div className="flex justify-center mb-3">{getWeatherIcon(day.icon)}</div>
    <div className="text-white/70 text-sm mb-2">{day.condition}</div>
    <div className="flex justify-between text-white">
      <span className="font-semibold">{day.high}°</span>
      <span className="text-white/70">{day.low}°</span>
    </div>
  </div>
);

export default ForecastCard;
