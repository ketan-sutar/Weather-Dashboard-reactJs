import React from "react";
import { Wind, Droplets, Eye, Sun } from "lucide-react";

const WeatherDetails = ({ current, textColor }) => (
  <div className="space-y-3">
    <DetailRow
      label="Wind"
      value={`${current.windSpeed} m/s`}
      icon={<Wind />}
      textColor={textColor}
    />
    <DetailRow
      label="Humidity"
      value={`${current.humidity}%`}
      icon={<Droplets />}
      textColor={textColor}
    />
    <DetailRow
      label="Visibility"
      value={`${current.visibility} km`}
      icon={<Eye />}
      textColor={textColor}
    />
    <DetailRow
      label="UV Index"
      value={current.uvIndex || "N/A"}
      icon={<Sun />}
      textColor={textColor}
    />
  </div>
);

const DetailRow = ({ label, value, icon, textColor }) => (
  <div
    className={`flex items-center justify-between bg-white/10 p-3 rounded-xl ${textColor}`}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
    <span className="font-semibold">{value}</span>
  </div>
);

export default WeatherDetails;
