import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../styles/fonts.css'
import '../styles/styles.scss'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
