import React from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import article1 from '../assets/article1.jpg';
import article2 from '../assets/article2.jpg';
import article3 from '../assets/article3.jpg';
import artisan1 from '../assets/artisan1.jpg';
import artisan2 from '../assets/artisan2.jpg';
import artisan3 from '../assets/artisan3.jpg';

const Home = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #f0f8ff, #dceefb)' }}>

      
<section className="position-relative text-white text-center">
  <div
    id="heroCarousel"
    className="carousel slide carousel-fade"
    data-bs-ride="carousel"
    data-bs-interval="4000"
  >
    <div className="carousel-inner" style={{ height: '400px' }}>
      <div className="carousel-item active">
        <img src={hero1} className="d-block w-100" alt="Hero 1" style={{ objectFit: 'cover', height: '400px' }} />
      </div>
      <div className="carousel-item">
        <img src={hero2} className="d-block w-100" alt="Hero 2" style={{ objectFit: 'cover', height: '400px' }} />
      </div>
      <div className="carousel-item">
        <img src={hero3} className="d-block w-100" alt="Hero 3" style={{ objectFit: 'cover', height: '400px' }} />
      </div>
    </div>
  </div>


  <div
    className="container d-flex flex-column justify-content-center align-items-center h-100 position-absolute top-0 start-0 end-0"
    style={{ zIndex: 2 }}
  >
    <h1 className="display-4 fw-bold">Bienvenue sur ArtisanMap</h1>
    <p className="lead mt-3">Découvrez, localisez les artisans près de chez vous.</p>
    <Link to="/artisans" className="btn btn-primary mt-4">Voir les artisans</Link>
  </div>

  
  <div
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
    }}
  ></div>
</section>



     
      <section className="container my-5">
        <h2 className="text-center mb-4">Ajouts Récents</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={artisan1} alt="Artisan 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">ABDOUL TOKO </h5>
                <p className="card-text">  <h4>Forgeron</h4> <br />Spécialiste du travail du métal, le forgeron façonne le fer pour créer ou réparer des outils, grilles, portails, ou objets décoratifs. Un métier de force et de précision, transmis de génération en génération</p>
           
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={artisan2} alt="Artisan 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">AROUNA Baboni</h5>
                <p className="card-text">  <h4>Potier</h4> <br />Artisan de la terre, le potier façonne l’argile avec ses mains pour créer des objets du quotidien ou décoratifs : marmites, vases, jarres, plats traditionnels… Son savoir-faire ancestral allie créativité et utilité. </p>
               
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={artisan3} alt="Artisan 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">BACHABI MAROUANE</h5>
                <p className="card-text"> <h4>Soudeur</h4> <br />Maître du feu et du métal, le soudeur assemble des pièces en acier, aluminium ou fer grâce à la chaleur. Il travaille sur des portails, des grilles, des structures métalliques ou des réparations diverses
                </p>
              
              </div>
            </div>
          </div>
        </div>
        <Link to="./artisans"  className="btn btn-outline-primary">Voir plus</Link>
      </section>

     
      <section className="container my-5">
        <h2 className="text-center mb-4">Actualité Locale</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={article1} alt="Article 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Lancement du marché artisanal de Cotonou – Une vitrine pour les talents locaux</h5>
                <p className="card-text">Le nouveau marché artisanal de Cotonou a officiellement ouvert ses portes ce samedi. Situé en plein cœur du quartier Zongo, ce lieu met à l’honneur le savoir-faire des artisans béninois : sculpture, tissage, poterie, bijouterie… il y en a pour tous les goûts !

Organisé par la mairie en collaboration avec des associations locales, cet espace vise à promouvoir les produits faits main et encourager l’économie locale. “C’est une opportunité pour nous d’avoir plus de visibilité”, témoigne Marius, artisan sculpteur depuis 12 ans.

Le marché est ouvert tous les week-ends de 8h à 18h. Une belle occasion de découvrir des créations uniques et de soutenir les talents du pays.
</p>
                <Link to="/news/1" className="btn btn-outline-primary">Lire l'article</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={article2} alt="Article 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Lancement d’un programme de formation gratuit pour les jeunes artisans à Parakou</h5>
                <p className="card-text">Bonne nouvelle pour les jeunes de Parakou ! Un programme de formation professionnelle vient d’être lancé par l’ONG “Talents en Action”, avec le soutien du ministère de l’Artisanat. Ce projet vise à former gratuitement 500 jeunes dans des domaines comme la couture, la menuiserie, la mécanique ou encore l’informatique.

Les cours se dérouleront sur trois mois, avec une phase théorique suivie d’un stage pratique. À l’issue de la formation, chaque participant recevra un kit de démarrage et un certificat.

Les inscriptions sont ouvertes jusqu’au 30 avril dans les arrondissements de Parakou. Une belle initiative pour booster l’emploi local !
</p>
                <Link to="/news/2" className="btn btn-outline-primary">Lire l'article</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={article3} alt="Article 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Porto-Novo adopte un plan vert pour soutenir l’agriculture urbaine</h5>
                <p className="card-text">Porto-Novo passe au vert ! La mairie vient de dévoiler un plan d’aménagement de jardins urbains dans plusieurs quartiers de la ville. L’objectif ? Encourager les habitants à cultiver leurs propres légumes et valoriser les espaces non utilisés.

“Ce projet permettra de lutter contre l’insécurité alimentaire tout en créant du lien social”, explique un responsable du projet. Les premiers sites pilotes ont déjà été aménagés dans les quartiers de Ouando et Tokpota, avec la participation active des riverains.

Des séances de formation sont également prévues pour aider les citoyens à cultiver de façon durable et biologique. Une initiative qui allie écologie, alimentation saine et économie locale mettant ainsi en valeur la ville.</p>
                <Link to="/news/3" className="btn btn-outline-primary">Lire l'article</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Témoignages</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">"ArtisanMap m'a permis de trouver un plombier rapidement pour une urgence. Un service génial !" </p>
                <footer className="blockquote-footer">Freddy AGBONA, Client satisfait</footer>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">"Grâce à ArtisanMap, j'ai pu développer ma clientèle. C'est un excellent outil pour les artisans."</p>
                <footer className="blockquote-footer">Soulemane TAPKARA, Artisan</footer>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">"J'ai trouvé une très bonne coiffeuse grâce à ArtisanMap. Un vrai gain de temps ! Alors faite comme moi"</p>
                <footer className="blockquote-footer">Rebecca BIAOU, Cliente satisfaite</footer>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
