import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Achieve = (props) => (
    <Layout>
        <Helmet>
            <title>Réalisations</title>
            <meta name="description" content="Achieve Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Réalisations</h2>
                    </header>
                    <p>Faire un laius sur les réalisations.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Le blog de l'écrivain</h3>
                            </header>
                            <p>Le celebre écrivain Jean Forteroche souhaitais un blog à sa mesure</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Découvrir</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Le Projet Louvre</h3>
                            </header>
                            <p>La mutation digitale entreprise par le Musée du Louvre se poursuit avec la mise en place d'un systeme de billeterie "Mobile first" </p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Découvrir</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Kapsul</h3>
                            </header>
                            <p>Le site qui vous fait découvrir les pépites du web </p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Découvrir</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Achieve