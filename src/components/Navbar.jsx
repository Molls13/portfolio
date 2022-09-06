import React from "react";
import styles from './Navbar.module.css'
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link to="about" spy={true} smooth={true}>
                <div className={styles.about}>about me</div>
            </Link>
            <div className={styles.works}>my works</div>
        </nav>
    )
}

export default Navbar