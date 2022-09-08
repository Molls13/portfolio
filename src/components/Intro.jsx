import React from "react";
import Navbar from './Navbar';
import styles from './Intro.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from "react-scroll";
import sun from './sun.png'


const Intro = () => {
    return (
        <section className="intro">
            <main className={styles.container}>
                <Navbar />
                <header className={styles.header}>
                    <p className={styles.name}>Yumeng Molly <span className={styles.sun}>Sun</span><img src={sun} alt='sun' className={styles.sunImg}/></p>
                    <p className={styles.dev}>Full-stack <span className={styles.js}>Javascript</span> developer based in Oslo</p>
                    <p className={styles.more}>know more about me</p>
                    <Link to="about" spy={true} smooth={true}>
                        <IoIosArrowDown className={styles.arrow} />
                    </Link>
                </header>
            </main>
        </section>
    )
}

export default Intro