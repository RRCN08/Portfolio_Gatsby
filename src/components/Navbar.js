import { Link } from 'gatsby'
import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function navbar() {
    return (
        <nav>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <div>
                        <FontAwesomeIcon
                        icon={faMoon}
                        onClick={() =>
                            theme === "dark" ? toggleTheme ("light") : toggleTheme( "dark" )
                            }
                        />
                    </div>
                )}
            </ThemeToggler>
            
            <Link to="/"><h2>rrc.</h2></Link>

            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
    )
}
