import React from "react";
import styles from './Navbar.module.css'
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link to="about" spy={true} smooth={true}>
                <div className={styles.about}>About Me</div>
            </Link>
            <Link to="projects" spy={true} smooth={true}>
            <div className={styles.works}>My Works</div>
            </Link>
        </nav>
    )
}

export default Navbar