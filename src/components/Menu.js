import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">L'agence</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/achieve">Réalisations</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/offer">Services</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/team">Team</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/blog">Bloc-notes</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/blog">Blog</Link></li>
            </ul>

        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
