import React from 'react'
import pic from '../pic.png'
import './About.css'

const About = () => {
    return(
        <div className="about">
        <div className="card">
            <div className="card-header">
                    <img alt="the web developer"  className="card-img-top" src={pic}></img>
              
            </div>
            <div className="card-body">
                  <div className="card-title">
                   <h3>Brigid Winitsky</h3>
                </div>
            <p>
                Brigid Winitsky is an aspiring web developer taking a full stack development course from the University of Oregon. Her other interests include game design, folk music, tabletop games, and writing.
            </p>
            </div>
        </div>
        </div>
    )
}

export default About