import { Link } from 'gatsby'
import React from 'react'

export default function navbar() {
    return (
        <nav>
            <Link to="/"><h2>rrc.</h2></Link>
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
    )
}
