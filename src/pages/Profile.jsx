import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
const [user, setUser] = useState(null);

const fetchProfile = async () => {
try {
const res = await axios.get('https://artisanmap.onrender.com/api/auth/profile', {
headers: {
Authorization: `Bearer ${localStorage.getItem('token')}`,
},
});
setUser(res.data);
} catch (error) {
console.error('Erreur de chargement du profil');
}
};

useEffect(() => {
fetchProfile();
}, []);

if (!user) return <p className="text-center mt-5">Chargement du profil...</p>;

return (
<div className="container mt-5">
<h2 className="mb-4">Mon Profil</h2>
<p><strong>Nom :</strong> {user.name}</p>
<p><strong>Email :</strong> {user.email}</p>
<p><strong>Rôle :</strong> {user.role}</p>
</div>
);
};

export default Profile;