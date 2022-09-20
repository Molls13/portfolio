import React, { useEffect } from "react";
import styles from './Projects.module.css'
import portfolio from './projectImages/portfolio.gif'
import pong from './projectImages/pong.gif'
import fourInaRow from './projectImages/4inarow.gif'
import todo from './projectImages/todo.gif'
import foodOrdering from './projectImages/foodOrdering.gif'
import travelogger from './projectImages/travelogger.gif'
import AOS from 'aos'
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <section className="projects" data-aos="fade" data-aos-offset="400" data-aos-easing="ease-in" data-aos-duration="600">
            <p className={styles.title}>Projects</p>
            <div className={styles.containerWrapper}>

            <div className={styles.container}>
                <div className={styles.projectCardTravel}>
                    <p className={styles.projectTitle}>Travelogger</p>
                    <img src={travelogger} alt="travelogger" className={styles.img} />
                    <p className={styles.techStack}> React, Express, Firebase, Cloudinary, MongoDB, SwiperJS</p>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button} onClick={(e) => {
                            e.preventDefault();
                            window.open('https://github.com/maheralsamman/travelogger','_blank');
                        }}>View on github</button>
                        <button className={styles.button}>Live demo</button>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <p className={styles.projectTitle}>Portfolio</p>
                    <img src={portfolio} alt="portfolio" className={styles.img} />
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button}>View on github</button>
                        <button className={styles.button}>Live demo</button>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <p className={styles.projectTitle}>Pong game</p>
                    <img src={pong} alt="pong" className={styles.img} />
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button}>View on github</button>
                        <button className={styles.button}>Live demo</button>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <p className={styles.projectTitle}>4 in a row</p>
                    <img src={fourInaRow} alt="4inarow" className={styles.img} />
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button}>View on github</button>
                        <button className={styles.button}>Live demo</button>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <p className={styles.projectTitle}>todo list</p>
                    <img src={todo} alt="todo" className={styles.img} />
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button}>View on github</button>
                        <button className={styles.button}>Live demo</button>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <p className={styles.projectTitle}>Food Ordering App</p>
                    <img src={foodOrdering} alt="food Ordering app" className={styles.img} />
                    <div className={styles.buttonWrapper}>
                        <button className={styles.button}>View on github</button>
                        <button className={styles.button}>Live demo</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Projects