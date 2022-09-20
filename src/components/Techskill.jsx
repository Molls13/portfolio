import React, { useEffect } from "react";
import styles from './Techskill.module.css'
import { IoLogoNodejs } from 'react-icons/io'
import {
    SiTypescript, SiJavascript, SiReact, SiRedux, SiFirebase,
    SiHtml5, SiCss3, SiExpress, SiMongodb, SiSqlite, SiPostgresql,
    SiGithub, SiNetlify, SiHeroku, SiFigma
} from 'react-icons/si'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from "react-scroll";
import AOS from 'aos'
import "aos/dist/aos.css";

const Techskill = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section className="techskill" data-aos="fade" data-aos-offset="400" data-aos-easing="ease-in" data-aos-duration="600">
            <div className={styles.bigContainer}>
                <div className={styles.techskill}>Tech Skills</div>
                <div className={styles.smallContainer}>
                    <section>
                        <p className={styles.title}>Languages</p>
                        <p><SiJavascript className={styles.icon} /> Javascript</p>
                        <p><SiTypescript className={styles.icon} /> typescript</p>
                    </section>
                    <section>
                        <p className={styles.title}>Frontend</p>
                        <p><SiReact className={styles.icon} /> ReactJS</p>
                        <p><SiRedux className={styles.icon} /> Redux</p>
                        <p><SiFirebase className={styles.icon} /> Firebase</p>
                        <p><SiHtml5 className={styles.icon} /> HTML5</p>
                        <p><SiCss3 className={styles.icon} /> CSS3/Saas</p>
                    </section>
                    <section>
                        <p className={styles.title}>Backend</p>
                        <p><IoLogoNodejs className={styles.iconSpecial} /> NodeJs</p>
                        <p><SiExpress className={styles.icon} /> ExpressJs</p>
                        <p><SiMongodb className={styles.icon} /> MongoDB</p>
                        <p><SiSqlite className={styles.icon} /> SQLite </p>
                        <p><SiPostgresql className={styles.icon} /> Postgres</p>
                    </section>
                    <section>
                        <p className={styles.title}>Tools</p>
                        <p><SiGithub className={styles.title} /> Github</p>
                        <p><SiNetlify className={styles.title} /> Netlify</p>
                        <p><SiHeroku className={styles.title} /> Heroku</p>
                        <p><SiFigma className={styles.title} /> Figma</p>
                    </section>
                </div>
                <div className={styles.arrowWrapper}>
            <Link to="projects" spy={true} smooth={true}>
                    <IoIosArrowDown className={styles.arrow} />
            </Link>
                </div>
            </div>
        </section>
    )
}

export default Techskill