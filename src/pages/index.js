import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="The Gatsby Agency"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>L'agence</h2>
                            </header>
                            <p>Faire ce qui est stratégiquement adéquat.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Réalisations</h3>
                                <p> What we've done</p>
                            </header>
                            <Link to="/achieve" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Services</h3>
                                <p>What we offer</p>
                            </header>
                            <Link to="/offer" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Team</h3>
                                <p>What we are</p>
                            </header>
                            <Link to="/team" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Bloc-notes</h3>
                                <p>What we think</p>
                            </header>
                            <Link to="/blog" className="link primary"></Link>
                        </article>
                        
                    </section>
                   
                </div>

            </Layout>
        )
    }
}

export default HomeIndex