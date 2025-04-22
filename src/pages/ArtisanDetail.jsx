import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArtisanDetail = () => {
const { id } = useParams();
const [artisan, setArtisan] = useState(null);

const fetchArtisan = async () => {
try {
const res = await axios.get(`https://artisanmap.onrender.com/api/artisans/${id}`);
setArtisan(res.data);
} catch (error) {
console.error('Erreur lors de la récupération des détails');
}
};

useEffect(() => {
fetchArtisan();
}, [id]);

if (!artisan) return <p className="text-center mt-5">Chargement...</p>;

return (
<div className="container mt-5">
<h2 className="mb-4">{artisan.name}</h2>
<p><strong>Spécialité :</strong> {artisan.specialty}</p>
<p><strong>Description :</strong> {artisan.description}</p>
<p><strong>Ville :</strong> {artisan.ville}</p>
<p><strong>Téléphone :</strong> {artisan.telephone}</p>
</div>
);
};

export default ArtisanDetail;