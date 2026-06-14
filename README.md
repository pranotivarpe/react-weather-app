# ⛅ React Weather App

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![MUI](https://img.shields.io/badge/Material--UI-5.x-0081CB?style=flat-square&logo=mui&logoColor=white)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-EB6E4B?style=flat-square)

A clean, responsive weather application built with **React** and **Material UI**. Search any city and get real-time weather data including temperature, humidity, wind speed, and weather description.

---

## Features

- 🌍 **City Search** — Look up weather for any city worldwide
- 🌡️ **Real-time Data** — Live temperature, feels-like, humidity, and wind speed
- 🌤️ **Weather Icons** — Visual icons matching current conditions
- 📦 **Info Cards** — Weather stats displayed in clean MUI cards
- ⚡ **Instant Results** — Fast API calls with loading states

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Material UI | Component library |
| OpenWeatherMap API | Weather data |

---

## Project Structure

```
react-weather-app/
├── App.jsx           # Root component
├── WeatherApp.jsx    # Main weather display logic
├── SearchBox.jsx     # City search input
├── InfoBox.jsx       # Weather info card component
├── App.css           # App-level styles
└── main.jsx          # Entry point
```

---

## Getting Started

### Prerequisites

- OpenWeatherMap API key (free) → [openweathermap.org](https://openweathermap.org/api)

### Setup

```bash
# Clone the repository
git clone https://github.com/pranotivarpe/react-weather-app.git
cd react-weather-app

# Install dependencies
npm install
```

Add your API key to `WeatherApp.jsx` or a `.env` file:

```env
VITE_WEATHER_API_KEY=your-api-key-here
```

```bash
npm run dev
```