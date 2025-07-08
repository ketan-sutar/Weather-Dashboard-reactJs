# WEATHER DASHBOARD

*COMPANY*: CODETECH IT SOLUTIONS

*NAME*: KETAN SUTAR

*INTERN ID*: CT08DF557

*DOMAIN*: REACT.JS WEB DEVELOPMENT

*DURATION*:8 WEEKS

*MENTOR*: NEELA SANTOSH



*DESCRIPTION*: The Weather Dashboard is a responsive and interactive web application built with React.js, designed to display real-time weather information and a 5-day forecast for any city in the world. It fetches live weather data from the OpenWeatherMap API and dynamically updates the UI based on the current weather conditions.

*Tech Stack*:

- React.js – Frontend framework for component-based architecture and state management using hooks

- Tailwind CSS – Utility-first CSS framework for fast, responsive UI styling

- OpenWeatherMap API – Provides current weather and 5-day forecast data

- Lucide React – Clean icon set for weather metrics like wind, humidity, and visibility

- Vite – Fast build tool for development and bundling

- JavaScript (ES6+) – Used for asynchronous API requests and logic

*Core feature*:

*City Weather Search*:
- Users can search for any city. The app displays:

- Current Weather: Temperature, humidity, wind speed, visibility, “feels like” temperature, and condition

- 5-Day Forecast: Daily high and low temperatures, weather icons, and conditions grouped by day


*Dynamic Theming*: The background and text color change dynamically based on the current weather condition (e.g., rain, snow, clear skies).
Custom logic maps each condition to a unique gradient theme, making the interface visually engaging.

*Component-Based UI*: Modular and reusable components ensure better code organization and readability:

- WeatherDashboard – Handles data fetching, input, and layout.

- CurrentWeather – Displays the current weather in detail.

- ForecastCard – Renders each of the 5-day forecast cards.

- WeatherDetails – Shows additional metrics like wind, humidity, visibility, and UV index.

*Responsive Design*:
- Fully responsive layout using Tailwind’s grid system.

- Forecast cards adjust from a single column on mobile to a 5-column layout on larger screens.

- Includes hover effects and transitions for a smooth UI experience.

*How It Works*:
- User enters a city name and clicks the Search button.

- App fetches current weather and 5-day forecast data using fetch and async/await.

- Forecast data is grouped by day using timestamps (dt_txt).

- Data is parsed and passed to UI components for rendering.

- Background and text color dynamically update based on weather conditions.

*Environment Handling*:
API key is managed securely using Vite’s environment variables

Stored in a .env file as VITE_WEATHER_API_KEY and accessed using import.meta.env

Keeps sensitive credentials out of the source code








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
