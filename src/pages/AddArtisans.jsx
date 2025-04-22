import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddArtisan = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [description, setDescription] = useState('');
  const [ville, setVille] = useState('');
  const [telephone, setTelephone] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://artisanmap.onrender.com/api/artisans',
        {
          name,
          specialty,
          description,
          ville,
          telephone,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Si tu utilises un token JWT pour l'authentification
          },
        }
      );
      history('/artisans');
      ; // Rediriger vers la page des artisans après ajout
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'artisan');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Ajouter un Artisan</h2>
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
          Ajouter Artisan
        </button>
      </form>
    </div>
  );
};

export default AddArtisan;
