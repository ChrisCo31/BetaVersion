import React from 'react'

import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'



const Blog = (props) => (
    <Layout>
        <Helmet>
            <title>Bloc-Notes</title>
            <meta name="description" content="Blog Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>L'univers de l'ESS</h2>
                            </header>
                            <p>comprendre les avantages.</p>
                        </div>
                        <div className="inner">
                            <header className="major">
                                <h2>C'est quoi un CMS headless</h2>
                            </header>
                            <p>Et pourquoi l'utiliser ?.</p>
                        </div>
                        <div className="inner">
                            <header className="major">
                                <h2>L'univers de l'ESS</h2>
                            </header>
                            <p>comprendre les avantages.</p>
                        </div>
                        <div className="inner">
                            <header className="major">
                                <h2>L'univers de l'ESS</h2>
                            </header>
                            <p>comprendre les avantages.</p>
                        </div>
                    </section>
        </div>

    </Layout>
)

export default Blog