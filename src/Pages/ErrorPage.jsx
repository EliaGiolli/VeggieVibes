import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link per la navigazione

function ErrorPage() {
    return (
        <div className="error-container">
            <h1 className="error-title">Oops! Qualcosa è andato storto.</h1>
            <p className="error-message">La pagina che stai cercando non esiste o si è verificato un errore.</p>
            <Link to="/" className="error-link">Torna alla Home</Link>
        </div>
    );
}

export default ErrorPage;