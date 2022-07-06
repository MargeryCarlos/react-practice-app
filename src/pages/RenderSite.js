import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import App from './App'
import Home from './Home'

import "./styles.css"
// import WeekDayApp from './WeekDayApp'

const RenderSite = () => {
    const activeClassName = ({ isActive }) => isActive ? "is-active" : ""

    return (
        <>
            <header>
                <ul className="navbar">
                    <li><NavLink className={activeClassName} to="/">Home</NavLink></li>
                    <li><NavLink className={activeClassName} to="/react-logo-spin">React's Example App</NavLink></li>
                    {/* <li><NavLink className={activeClassName} to="/weekday-app">Day of the Week by Date</NavLink></li> */}
                </ul>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/react-logo-spin" element={<App />} />
                    {/* <Route path="/weekday-app" element={<WeekDayApp />} /> */}
                </Routes>
            </main>
        </>
    )
}

export default RenderSite