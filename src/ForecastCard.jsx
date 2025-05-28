import React from "react";

const getWeatherIcon = (condition) => {
  const iconMap = {
    "01d": "sunny",
    "01n": "sunny",
    "02d": "partly-cloudy",
    "02n": "partly-cloudy",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rainy",
    "09n": "rainy",
    "10d": "rainy",
    "10n": "rainy",
    "11d": "stormy",
    "11n": "stormy",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "cloudy",
    "50n": "cloudy",
  };

  // const icons = {
  //   sunny: <span className="text-yellow-500 text-3xl">☀️</span>,
  //   "partly-cloudy": <span className="text-gray-400 text-3xl">🌤️</span>,
  //   cloudy: <span className="text-gray-500 text-3xl">☁️</span>,
  //   rainy: <span className="text-blue-500 text-3xl">🌧️</span>,
  //   snowy: <span className="text-blue-200 text-3xl">❄️</span>,
  //   stormy: <span className="text-yellow-600 text-3xl">⛈️</span>,
  // };

  const mappedCondition = iconMap[condition] || "sunny";
  return icons[mappedCondition];
};

const ForecastCard = ({ day }) => (
  <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-all cursor-pointer border border-gray-100">
    <div className="text-gray-700 font-medium text-sm mb-1">{day.date}</div>
    <div className="text-gray-900 font-semibold mb-2">{day.day}</div>

    <div className="flex flex-col items-center mb-3">
      <img
        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
        alt={day.condition}
        className="w-12 h-12"
      />
    </div>

    <div className="text-gray-600 text-sm mb-3 capitalize">{day.condition}</div>

    <div className="flex justify-between items-center text-gray-800">
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-500">High</span>
        <span className="font-bold text-lg">{day.high}°</span>
      </div>
      <div className="h-6 w-px bg-gray-200 mx-2"></div>
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-500">Low</span>
        <span className="font-semibold text-lg text-gray-600">{day.low}°</span>
      </div>
    </div>

    {day.pop && (
      <div className="mt-2 text-xs text-red-500">Precipitation: {day.pop}%</div>
    )}
  </div>
);

export default ForecastCard;
