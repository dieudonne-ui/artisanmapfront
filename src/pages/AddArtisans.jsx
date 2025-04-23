import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  } catch {
    return null;
  }
};

const AddArtisan = () => {
  const [specialty, setSpecialty] = useState('');
  const [description, setDescription] = useState('');
  const [ville, setVille] = useState('');
  const [telephone, setTelephone] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserFromToken();
    if (user && user.name) {
      setName(user.name); // Le nom est automatiquement mis à partir du token
    } else {
      navigate('/login'); // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://artisanmap.onrender.com/api/artisans',
        {
          name, // automatiquement défini
          specialty,
          description,
          ville,
          telephone,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      navigate('/artisans');
    } catch (error) {
      setError('Erreur lors de l\'ajout de l\'artisan. Veuillez réessayer.');
      console.error("Erreur lors de l'ajout de l'artisan", error);
    }
  };

  return (
    <div className="container mt-5">
      {/* Image de fond */}
      <div className="background"></div>
      
      <h2>Ajouter un Artisan</h2>

      {error && <div className="alert alert-danger">{error}</div>} {/* Affichage d'un message d'erreur */}

      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            value={name}
            readOnly
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
