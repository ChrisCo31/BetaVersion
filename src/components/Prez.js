import React from 'react'
import PropTypes from 'prop-types'

const Prez = (props) => (
    <prez id="prez" style={props.timeout ? {display: 'none'} : {}}>
       
        <div className="content">
            <div className="inner">
                <h1>Les projets</h1>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Projet_1')}}>Projet 1</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Projet_2')}}>Projet 2</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Projet_3')}}>Projet 3</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Projet_4')}}>Projet 4</a></li>
            </ul>
        </nav>
    </prez>
)

Prez.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Prez
