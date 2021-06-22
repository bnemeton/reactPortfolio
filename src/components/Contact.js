import React from 'react'
import './Contact.css'

const Contact = () => {
    return(
        <div className="contact">
            <div className="contact-info">
        <p>contact:</p>
            <ul>
                <li>email:<a href="mailto: brigid.nemeton@gmail.com">brigid.nemeton@gmail.com</a></li>
                <li>phone: 310-650-3967</li>
                <li>github: <a href="https://github.com/bnemeton">https://github.com/bnemeton</a></li>
                <li>twitter:<a href="https://twitter.com/bnemeton" target="_blank">@bnemeton</a></li>
                <li>linkedin: <a href="https://www.linkedin.com/in/brigid-winitsky-396994209/">https://www.linkedin.com/in/brigid-winitsky-396994209/</a></li>
                </ul>
        </div>
        </div>
    )
}

export default Contact