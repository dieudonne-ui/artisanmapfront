import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Artisans from './pages/Artisans';
import ArtisanDetail from './pages/ArtisanDetail';
import NotFound from './pages/NotFound';
import AddArtisan from './pages/AddArtisans';
import EditArtisan from './pages/EditArtisan';
import AdminArtisans from './pages/AdminArtisans';
const AppRoutes = () => {
    
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/a-propos" element={<About />} />
<Route path="/admin/artisans" element={<AdminArtisans />} />
<Route path="/add-artisan" element={<AddArtisan />} />
<Route path="/edit-artisan/:id" element={<EditArtisan />} />

<Route path="/connexion" element={<Login />} />
<Route path="/inscription" element={<Register />} />
<Route path="/profil" element={<Profile />} />
<Route path="/artisans" element={<Artisans />} />
<Route path="/artisans/:id" element={<ArtisanDetail />} />
<Route path="*" element={<NotFound />} />
</Routes>
);
};

export default AppRoutes;