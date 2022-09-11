import React from "react";
import { Link } from "react-scroll";
import styles from './About.module.css'
import pic from './IMG_0005.JPG'
import { IoIosArrowDown } from 'react-icons/io'
import sun from './sun.png'

const About = () => {
    return (
        <section className="about">
            <main className={`${styles.container} ${styles.reveal} ${styles.active} ${styles.fadebottom}`}>
                <p className={styles.aboutMe}>About me<img src={sun} alt='sun' className={styles.sunImg}/></p>
                <div className={styles.borderContainer}>
                    <p className={styles.text}>
                        I am a passionate and dedicated developer with an
                        eagerness to learn. My background in Economics and
                        data science has equipped me with an analytical
                        mindset and empirical research ability. I enjoy
                        problem-solving when in a team as well as
                        individually, and I am always ready for new
                        challenges!
                    </p>
                    <img src={pic} className={styles.img} alt="Molly" />
                </div>
                <div className={styles.arrowWrapper}>
                <Link to="timeline" spy={true} smooth={true}>
                    <IoIosArrowDown className={styles.arrow} />
                </Link>
                </div>
            </main>
        </section>
    )
}

export default About