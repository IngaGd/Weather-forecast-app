# Weather forecast app

## Overview

This project is a React + Vite weather forecast application that provides hourly and daily weather data for selected cities. Users can search for a city, view its weather conditions, and track their most-viewed cities. The app fetches weather data from Meteo.lt API and logs user interactions.

## Features

- Search & Select Cities – Users can search and select a city to view weather conditions.
- Hourly & Daily Forecasts – Displays weather data with MUI Charts.
- Data Persistence – Stores recently viewed cities in local storage.
- Express Backend – Logs user selections to a JSON database.
- Styled with SASS – Responsive UI with custom styles.

## Tech Stack & Tools

Frontend
React – Core UI library.
Vite – Fast build tool for optimized development.
MUI X Charts – Data visualization with line charts.
SASS – Enhanced styling with SCSS.
Backend
Express.js – Lightweight Node.js server.
Meteo.lt API – Fetches weather forecasts.
fs (File System) – Logs user-selected cities in a JSON file.

## Installation & Setup

1. Clone the repository
   git clone https://github.com/IngaGd/Weather-forecast-app.git
   cd weather-forecast-app

2. Install dependencies
   npm install

3. Configure Environment Variables
   VITE_URL=http://localhost:8080/api/
   SERVER_URL=http://localhost:5173
   PORT=8080

4. Start the development server
   npm run dev

5. Install Express backend dependencies
   cd server
   npm install

6. Start the Express backend
   For development (auto-restart on file changes) - npm run dev
   For production (manual start, no auto-restart) - npm start
