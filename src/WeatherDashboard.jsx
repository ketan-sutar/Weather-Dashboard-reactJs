// import React, { useState } from "react";
// import { Search, MapPin } from "lucide-react";
// // import WeatherCard from "./";
// import WeatherCard from "./WeatherCrad";
// import WeatherDetails from "./WeatherDetails";
// import ForecastCard from "./ForecastCard";

// const WeatherDashboard = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [selectedCity, setSelectedCity] = useState("New York");

//   const mockWeatherData = {
//     current: {
//       location: "New York, NY",
//       temperature: 22,
//       condition: "Partly Cloudy",
//       humidity: 65,
//       windSpeed: 12,
//       visibility: 10,
//       feelsLike: 25,
//       uvIndex: 6,
//     },
//     forecast: [
//       { day: "Today", high: 25, low: 18, condition: "Partly Cloudy", icon: "partly-cloudy" },
//       { day: "Tomorrow", high: 28, low: 20, condition: "Sunny", icon: "sunny" },
//       { day: "Thursday", high: 24, low: 16, condition: "Rainy", icon: "rainy" },
//       { day: "Friday", high: 21, low: 14, condition: "Cloudy", icon: "cloudy" },
//       { day: "Saturday", high: 26, low: 19, condition: "Sunny", icon: "sunny" },
//     ],
//   };

//   const handleSearch = (e) => {
//     if (e) e.preventDefault();
//     if (searchInput.trim()) {
//       setSelectedCity(searchInput);
//       setSearchInput("");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-white mb-2">Weather Dashboard</h1>
//           <p className="text-blue-100">Stay updated with current weather conditions</p>
//         </div>

//         {/* Search Bar */}
//         <div className="mb-8">
//           <div className="max-w-md mx-auto">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search for a city..."
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
//                 className="w-full px-4 py-3 pl-12 rounded-full border-0 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
//               />
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <button
//                 onClick={handleSearch}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1.5 rounded-full hover:bg-blue-600 transition-colors"
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Weather Card */}
//         <WeatherCard current={mockWeatherData.current} />

//         {/* Forecast */}
//         <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 mt-8">
//           <h3 className="text-2xl font-semibold text-white mb-6">5-Day Forecast</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//             {mockWeatherData.forecast.map((day, idx) => (
//               <ForecastCard key={idx} day={day} />
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-8">
//           <p className="text-white/60 text-sm">
//             Weather data updates every hour • Last updated:{" "}
//             {new Date().toLocaleTimeString()}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherDashboard;







import React, { useState } from 'react'

const WeatherDashboard = () => {


  

  const api={
    key: "86a0d24091ec54ffc03aab9f480efd10",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [inputValue, setInputValue] = useState("")
  
  const handleClick=async()=>{
    if(!inputValue){
      console.log("Please enter a city name");
      return;
    }

    try {
      const response=await fetch(`${api.base}weather?q=${inputValue}&appid=${api.key}&units=metric`);
      const data=await response.json();
      console.log(data);
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
      
    }





  }
  return (
    <div>
      <h1>Hello</h1>
      <input type="text" placeholder='Search...' 
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <button
      onClick={handleClick}
      >Search</button>
    </div>
  )
}

export default WeatherDashboard
