import React from 'react'
import './Portfolio.css'
import momentousPic from '../momentous.png'
import notetakerPic from '../notetaker.png'
import techblogPic from '../techblog.png'

const Portfolio = () => {
    return(
        <div className="portfolio">
        <div className="card">
            <div className="card-header">
                <div className="card-image">
                    <img alt="a screenshot" src={momentousPic}></img>
                </div>
                <div className="card-title">
                   <h3>Momentous Events</h3>
                </div>
            </div>
            <div className="card-body">
            <p>
            An event planning website. <a href='https://github.com/bnemeton/momentous'>On github here.</a>
            </p>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <div className="card-image">
                    <img alt="the web developer" src={notetakerPic}></img>
                </div>
                <div className="card-title">
                   <h3>Note Taker</h3>
                </div>
            </div>
            <div className="card-body">
            <p>
            A web app for taking notes and saving them. <a href='https://github.com/bnemeton/notetaker'>On github here.</a>
            </p>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <div className="card-image">
                    <img alt="the web developer" src={techblogPic}></img>
                </div>
                <div className="card-title">
                   <h3>Tech Blog</h3>
                </div>
            </div>
            <div className="card-body">
            <p>
            A blogging site using a MySQL database.<a href='https://github.com/bnemeton/tech'>On Github here.</a>
            </p>
            </div>
        </div>
        </div>
    )
}

export default Portfolio