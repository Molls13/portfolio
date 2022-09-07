import React from "react";
import { BsLinkedin, BsEnvelopeFill, BsFacebook } from 'react-icons/bs'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <>
        <p className={styles.contact}>Contact me</p>
        <div className={styles.contactContainer}>
            <BsLinkedin onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.linkedin.com/in/yumengmollysun/');
                        }}
                            className={styles.icon}
                        />
            <BsEnvelopeFill className={styles.icon} onClick={(e) => {
                            e.preventDefault();
                            window.open('mailto:mollyumeng.sun@gmail.com');
                        }}/>
            <BsFacebook className={styles.icon} onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.facebook.com/molly.sun.18/');
                        }}/>
        </div>
        </>
    )
}

export default Contact