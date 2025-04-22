import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Artisans = () => {
 const [artisans, setArtisans] = useState([]);
 const [search, setSearch] = useState('');

 const fetchArtisans = async () => {
 try {
 const res = await axios.get('https://artisanmap.onrender.com/api/artisans');
 console.log(res.data)
 setArtisans(res.data);
 } catch (error) {
 console.error('Erreur lors de la récupération des artisans');
 }
 };

 useEffect(() => {
 fetchArtisans();
 }, []);

 const filtered = artisans.filter(a =>
 a.specialty.toLowerCase().includes(search.toLowerCase())
 );

 return (
 <div className="container mt-5">
 <h2 className="mb-4">Liste des Artisans</h2>
 <input
 type="text"
 className="form-control mb-4"
 placeholder="Rechercher par spécialité"
 value={search}
 onChange={(e) => setSearch(e.target.value)}
 />
 <div className="row">
 {filtered.map(artisan => (
 <div className="col-md-3 mb-3" key={artisan._id}>
 <div className="card h-100">
 <div className="card-body">
 <h5 className="card-title">{artisan.name}</h5>
 <p className="card-text"><strong>Spécialité :</strong> {artisan.specialty}</p>
 <p className="card-text"><strong>Description :</strong> {artisan.description}</p>
 <p className="card-text"><strong>Ville :</strong> {artisan.ville}</p>
 <p className="card-text"><strong>Téléphone :</strong> {artisan.telephone}</p>
 <Link to={`/artisans/${artisan._id}`} className="btn btn-primary">Voir détail</Link>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 );
};

export default Artisans;