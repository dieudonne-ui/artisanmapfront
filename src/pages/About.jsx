import React from 'react';
import { Link } from 'react-router-dom';
import equipe1 from '../assets/equipe1.jpg';
import equipe2 from '../assets/equipe2.jpg';
import equipe3 from '../assets/equipe3.jpg';
import about from '../assets/about.jpg';

const Apropos = () => {
    return (
        <div style={{ background: 'linear-gradient(to bottom, #f0f8ff, #dceefb)', minHeight: '100vh' }}>

           
            <section className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 fw-bold">ArtisanMap</h1>
                        <p>
                            Chez ArtisanMap, nous croyons fermement que chaque artisan mérite d’être vu, reconnu et valorisé à sa juste valeur. Dans un monde de plus en plus connecté, il est essentiel de permettre aux professionnels locaux de bénéficier d’une visibilité numérique efficace. C’est pourquoi nous avons conçu une plateforme intuitive et accessible, pensée pour mettre en lumière les talents artisanaux du Bénin et d’ailleurs. Grâce à notre solution, les utilisateurs peuvent facilement rechercher des artisans qualifiés dans leur région, consulter leurs profils détaillés, lire les avis d’autres clients, et entrer en contact avec eux en toute simplicité.

                            Notre mission ne s’arrête pas à la mise en relation : nous accompagnons également les artisans dans leur transformation digitale, en leur offrant des outils pour gérer leur activité, valoriser leur savoir-faire, et bâtir une réputation en ligne solide. En facilitant cette connexion entre l’offre artisanale et la demande locale, nous contribuons à dynamiser l’économie locale, à renforcer la confiance entre professionnels et clients, et à préserver les métiers manuels qui font la richesse de notre patrimoine. ArtisanMap, c’est donc bien plus qu’un annuaire : c’est un tremplin vers l’avenir pour des milliers d’artisans passionnés.
                        </p>
                        <p>
                            Notre objectif est de faciliter l'accès à des services artisanaux de qualité,
                            tout en aidant les artisans à développer leur activité.
                        </p>
                    </div>
                    <div className="col-md-6">

                        <img src={about} alt="Image à propos" className="img-fluid" />

                    </div>
                </div>
                <Link to="./artisans" className="btn btn-outline-primary">Explorer</Link>
            </section>

           
            <section className="container py-5">
                <h2 className="text-center mb-4">Notre Équipe</h2>
                <div className="row justify-content-center">
                   
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-sm">
                        <img src={equipe1} alt="Membre 1" className="card-img-top equipe-img" />

                            <div className="card-body">
                                <h5 className="card-title">N'WEMOU MOUATE DIEUDONNE</h5>
                                <p className="card-text"><h6>Chef projet &
                                Développeur Fullstack <br /> +229 66038512
                                </h6> </p>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-sm">
                        <img src={equipe2} alt="Membre 1" className="card-img-top equipe-img" />

                            <div className="card-body">
                                <h5 className="card-title">AROUNA ISMAILOU</h5>
                                <p className="card-text"><h6> 
                                Développeur Fullstack <br /> +229 66626996
                                </h6></p>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-md-4 mb-4">
                        <div className="card text-center shadow-sm">
                        <img src={equipe3} alt="Membre 1" className="card-img-top equipe-img" />

                            <div className="card-body">
                                <h5 className="card-title">DARI KOUGO</h5>
                                <p className="card-text"><h6> 
                                Développeur <br /> +229 41927373
                                </h6></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Apropos;
