import React from "react";
import { Wind, Droplets, Eye, Sun } from "lucide-react";

const WeatherDetails = ({ current }) => (
  <div className="space-y-4">
    <DetailRow label="Wind Speed" value={`${current.windSpeed} km/h`} icon={<Wind />} />
    <DetailRow label="Humidity" value={`${current.humidity}%`} icon={<Droplets />} />
    <DetailRow label="Visibility" value={`${current.visibility} km`} icon={<Eye />} />
    <DetailRow label="UV Index" value={current.uvIndex} icon={<Sun />} />
  </div>
);

const DetailRow = ({ label, value, icon }) => (
  <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
    <div className="flex items-center">
      <span className="w-5 h-5 text-white/80 mr-3">{icon}</span>
      <span className="text-white/80">{label}</span>
    </div>
    <span className="text-white font-semibold">{value}</span>
  </div>
);

export default WeatherDetails;
