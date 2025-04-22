import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminArtisans = () => {
  const [artisans, setArtisans] = useState([]);
  const navigate = useNavigate();

  const fetchArtisans = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('https://artisanmap.onrender.com/api/artisans', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setArtisans(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Confirmer la suppression ?')) return;
    try {
      await axios.delete(`https://artisanmap.onrender.com/api/artisans/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchArtisans();
    } catch (err) {
      console.error('Erreur de suppression', err);
    }
  };

  useEffect(() => {
    fetchArtisans();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Gestion des Artisans</h2>
      <button onClick={() => navigate('/add-artisan')} className="btn btn-success mb-3">Ajouter un artisan</button>
      <div className="row">
        {artisans.map(artisan => (
          <div className="col-md-4 mb-3" key={artisan._id}>
            <div className="card p-3">
              <h5>{artisan.name}</h5>
              <p><strong>Spécialité:</strong> {artisan.specialty}</p>
              <p><strong>Ville:</strong> {artisan.ville}</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-warning btn-sm" onClick={() => navigate(`/edit-artisan/${artisan._id}`)}>
                  Modifier
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(artisan._id)}>
                  Supprimer
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminArtisans;
