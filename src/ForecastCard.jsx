
import React from "react";

const ForecastCard = ({ day, textColor }) => (
  <div className={`w-full bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg transition hover:scale-105 cursor-pointer ${textColor}`}>
    <p className="text-sm opacity-70 mb-1">{day.day}</p>
    <img
      src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
      alt={day.condition}
      className="mx-auto w-16 h-16"
    />
    <p className="capitalize mb-3">{day.condition}</p>
    <div className="flex justify-between text-sm">
      <div className="flex flex-col items-center">
        <span className="opacity-70">High</span>
        <span className="font-semibold">{day.high}°C</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="opacity-70">Low</span>
        <span>{day.low}°C</span>
      </div>
    </div>
  </div>
);

export default ForecastCard;
