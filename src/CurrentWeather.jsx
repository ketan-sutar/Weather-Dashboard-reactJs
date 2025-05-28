import React from "react";

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {weatherData.location}
          </h2>
          <p className="text-gray-600 text-lg">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-gray-800">
            {Math.round(weatherData.temperature)}°C
          </p>
          <p className="text-gray-600 capitalize">{weatherData.condition}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        <WeatherDetail
          label="Feels Like"
          value={`${Math.round(weatherData.feelsLike)}°C`}
          icon="🌡️"
        />
        <WeatherDetail
          label="Humidity"
          value={`${weatherData.humidity}%`}
          icon="💧"
        />
        <WeatherDetail
          label="Wind Speed"
          value={`${weatherData.windSpeed} m/s`}
          icon="💨"
        />
        <WeatherDetail
          label="Visibility"
          value={`${weatherData.visibility} km`}
          icon="👁️"
        />
      </div>
    </div>
  );
};

const WeatherDetail = ({ label, value, icon }) => (
  <div className="bg-gray-50 p-3 rounded-lg">
    <div className="flex items-center gap-2">
      <span className="text-lg">{icon}</span>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-700">{value}</p>
      </div>
    </div>
  </div>
);

export default CurrentWeather;
