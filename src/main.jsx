import React from 'react'
import ReactDOM from 'react-dom/client'
import { WeatherApp } from './WeatherApp'
import './Styles/weatherStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
)
