import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="page-footer font-small mdb-color darken-3 pt-4">
      <div className="d-flex flex-row justify-content-around">
        <p><span role="img" aria-label="yellow heart">&#x1F49B;</span> Made for the Rebel Forces by:
        <a href="http://www.kelleymichelle.com/" target="_blank" rel="noopener noreferrer">  Kelley Chaplain </a>
        &
        <a href="http://www.jamievullo.com/" target="_blank" rel="noopener noreferrer">  Jamie Vullo </a>
        </p>

        <a href="https://www.matchymatch.net/" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="heart eyes cat">&#x1F63B;</span> Click here to play Matchy-Match</a>
        <a href="https://projectmoonlight.herokuapp.com/" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="moon">&#x1F314;</span> Click here to visit Project Moonlight</a>
      </div>
    
    </footer>
  )
}

export default Footer;