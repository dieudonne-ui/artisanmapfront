import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
return (
<div className="container text-center mt-5">
<h1 className="display-1">404</h1>
<p className="lead">Page non trouvée</p>
<Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
</div>
);
};

export default NotFound;