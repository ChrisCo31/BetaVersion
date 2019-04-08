import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>Houston, we've had a problem...</h1>
                <p>Désolé, la page que vous cherchez à atteindre n'existe pas</p>
                <p><Link to="/landing" className="button next">Go Home</Link></p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
