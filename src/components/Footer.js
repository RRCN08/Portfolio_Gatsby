import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div>
            <footer>
                <p>"You mustn't be afraid to dream a little bigger, darling."</p>
                <p>Eames, Inception (2010)</p>
                <a href="http://behance.net/rrc08/" rel="noreferrer noopener"  target="_blank"> <FontAwesomeIcon icon={faBehanceSquare} /> </a>
                <a href="http://linkedin.com/in/rrcn08/" rel="noreferrer noopener"  target="_blank"> <FontAwesomeIcon icon={faLinkedin} /> </a>
                <a href="http://instagram.com/rrc08/" rel="noreferrer noopener"  target="_blank"> <FontAwesomeIcon icon={faInstagram} /> </a>
                <a href="http://fb.me/rrcn08/" rel="noreferrer noopener"  target="_blank"> <FontAwesomeIcon icon={faFacebookSquare} /> </a>
                <p>Searching for this template? Too bad I made it from scratch.
                   But you can grab the source code from <a href="https://github.com/RRCN08/Portfolio_2.0/" rel="noreferrer noopener"  target="_blank">GitHub</a> :)</p>
            </footer>
        </div>
    )
}
