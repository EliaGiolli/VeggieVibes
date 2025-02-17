import React from 'react';
import Navbar from '../components/Navbar';
import Buttons from '../components/buttons/Buttons';
import './About.css'; 

function About() {
  return (
    <>
        <Navbar />
        <div className="about-container">
            <h1>About VeggieVibes</h1>
            <p>VeggieVibes è stata fondata nel 2020 con l'obiettivo di promuovere uno stile di vita sano e sostenibile attraverso la cucina vegetale.</p>
            <p>La nostra missione è quella di ispirare le persone a scoprire il potere dei vegetali, offrendo ricette deliziose e facili da preparare.</p>
            <p>Crediamo che il cibo possa unire le persone e migliorare la salute, e ci impegniamo a fornire risorse e supporto a chiunque voglia intraprendere questo viaggio culinario.</p>
            <Buttons> Click Me! </Buttons>
        </div>
    </>
  );
}

export default About;