import React from 'react'
import './Portfolio.css'
import momentousPic from '../momentous.png'
import notetakerPic from '../notetaker.png'
import techblogPic from '../techblog.png'
import birthdayPic from '../birthdaybash.png'
import weatherPic from '../weather.png'
import schedulerPic from '../scheduler.png'

const Portfolio = () => {
    return(
        <div className="portfolio columns">
            <div className="column">
        <div className="card">
        <a href='https://momentous-events.herokuapp.com/'>
            <div className="card-header">
                <div className="card-image">
                    <img alt="a screenshot" src={momentousPic}></img>
                </div>
                <div className="card-title">
                   <h3>Momentous Events</h3>
                </div>
            </div>
            </a>
            <div className="card-body">
            <p>
            An event planning website. <a href='https://github.com/bnemeton/momentous'>On github here.</a>
            </p>
            </div>
        </div>
        <div className="card">
        <a href='https://obscure-shelf-74997.herokuapp.com'>
            <div className="card-header">
                <div className="card-image">
                    <img alt="a screenshot" src={notetakerPic}></img>
                </div>
                <div className="card-title">
                   <h3>Note Taker</h3>
                </div>
            </div>
            </a>
            <div className="card-body">
            <p>
            A web app for taking notes and saving them. <a href='https://github.com/bnemeton/notetaker'>On github here.</a>
            </p>
            </div>
        </div>
        <div className="card">
        <a href='https://frozen-earth-44297.herokuapp.com'>
            <div className="card-header">
                <div className="card-image">
                    <img alt="the web developer" src={techblogPic}></img>
                </div>
                <div className="card-title">
                   <h3>Tech Blog</h3>
                </div>
            </div>
            </a>
            <div className="card-body">
            <p>
            A blogging site using a MySQL database.<a href='https://github.com/bnemeton/tech'>On Github here.</a>
            </p>
            </div>
        </div>
        </div>
        <div className="column">
        <div className="card">
        <a href='https://pdxbellasaurus.github.io/superheroBirthdayBash/'>
            <div className="card-header">
                <div className="card-image">
                    <img alt="a screenshot" src={birthdayPic}></img>
                </div>
                <div className="card-title">
                   <h3>Famous Birthday Bash</h3>
                </div>
            </div>
            </a>
            <div className="card-body">
            <p>
            A site that matches your birthday with that of a famous person and gives you both a daily horoscope. <a href='https://github.com/bnemeton/superheroBirthdayBash'>On github here.</a>
            </p>
            </div>
        </div>
        <div className="card">
        <a href='https://bnemeton.github.io/weatherapp/'>
            <div className="card-header">
                <div className="card-image">
                    <img alt="a screenshot" src={weatherPic}></img>
                </div>
                <div className="card-title">
                   <h3>Weather App</h3>
                </div>
            </div>
            </a>
            <div className="card-body">
            <p>
            A weather forecast lookup site. <a href='https://github.com/bnemeton/weatherapp'>On github here.</a>
            </p>
            </div>
        </div>
        <div className="card">
        <a href='https://bnemeton.github.io/dailyscheduler/'>
            <div className="card-header">
                <div className="card-image">
                    <img alt="a screenshot" src={schedulerPic}></img>
                </div>
                <div className="card-title">
                   <h3>Daily Scheduler</h3>
                </div>
            </div>
            </a>
            <div className="card-body">
            <p>
            A simple page to schedule events on. <a href='https://github.com/bnemeton/dailyscheduler'>On github here.</a>
            </p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Portfolio