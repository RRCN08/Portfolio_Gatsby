import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import {
  faBehanceSquare,
  faFacebookSquare,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div class="content has-text-centered">
        <FontAwesomeIcon icon={faQuoteLeft} />
        <h5>"You mustn't be afraid to dream a little bigger, darling."</h5>
        <p>Eames, Inception (2010)</p>
        <a
          href="http://behance.net/rrc08/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faBehanceSquare} />
        </a>
        <a
          href="http://linkedin.com/in/rrcn08/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="http://instagram.com/rrc08/"
          rel="noreferrer noopener"
          target="_blank"
        >

          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="http://fb.me/rrcn08/"
          rel="noreferrer noopener"
          target="_blank"
        >

          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <p className="content ">
          Searching for this template? Too bad I made it from scratch. But you
          can grab the source code from&nbsp; 
          <a
            href="https://github.com/RRCN08/Portfolio_Gatsby/"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub
          </a>
          &nbsp;:)
        </p>
        </div>
      </footer>
    </div>
  );
}
