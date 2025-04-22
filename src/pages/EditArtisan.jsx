import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useParams } from 'react-router-dom';

import { useNavigate, useParams } from 'react-router-dom';

const EditArtisan = () => {
  const { id } = useParams(); // Récupérer l'ID de l'artisan via l'URL
  const [artisan, setArtisan] = useState(null);
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [description, setDescription] = useState('');
  const [ville, setVille] = useState('');
  const [telephone, setTelephone] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const res = await axios.get(`https://artisanmap.onrender.com/api/artisans/${id}`);
        setArtisan(res.data);
        setName(res.data.name);
        setSpecialty(res.data.specialty);
        setDescription(res.data.description);
        setVille(res.data.ville);
        setTelephone(res.data.telephone);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'artisan');
      }
    };

    fetchArtisan();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://artisanmap.onrender.com/api/artisans/${id}`,
        {
          name,
          specialty,
          description,
          ville,
          telephone,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Si tu utilises un token JWT
          },
        }
      );
      history('/artisans'); // Rediriger après modification
    } catch (error) {
      console.error('Erreur lors de la modification de l\'artisan');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Modifier un Artisan</h2>
      {artisan ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Spécialité</label>
            <input
              type="text"
              className="form-control"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Ville</label>
            <input
              type="text"
              className="form-control"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Téléphone</label>
            <input
              type="text"
              className="form-control"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Modifier Artisan
          </button>
        </form>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default EditArtisan;
