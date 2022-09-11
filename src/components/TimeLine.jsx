import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import React from 'react';
import styles from './TimeLine.module.css'
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineMenuBook, MdOutlineWork } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from "react-scroll";

const TimeLine = () => {
    return (
        <section className='timeline'>
            <p className={styles.mainTitle}>Timeline</p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className={styles.education}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  black' }}
                    date="2014 - 2018"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineMenuBook />}

                >
                    <h3 className={styles.bachelor}>Bachelor in Economics</h3>
                    <h4 className={styles.ucsb}>University of California, Santa Barbara</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={styles.work}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="Mar 2015 - Nov 2015"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineWork />}

                >
                    <h3 className={styles.ISF}>International Orientation Leader</h3>
                    <h4 className={styles.ucsb}>Santa Barbara, California, USA</h4>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={styles.work}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="2016 - 2017"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineWork />}

                >
                    <h3 className={styles.ISF}>Academic Peer Advisor</h3>
                    <h4 className={styles.ucsb}>Santa Barbara, California, USA</h4>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={styles.education}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="2019 - 2021"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineMenuBook />}

                >
                    <h3 className={styles.bachelor}>Master in Economics</h3>
                    <h4 className={styles.ucsb}>University of Oslo</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={styles.work}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="2020 - 2021"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineWork />}

                >
                    <h3 className={styles.ISF}>Institute for Social Research</h3>
                    <h4 className={styles.ucsb}>Oslo, Norway</h4>

                </VerticalTimelineElement>

            </VerticalTimeline>
            <div className={styles.arrowWrapper}>
            <Link to="techskill" spy={true} smooth={true}>
                <IoIosArrowDown className={styles.arrow} />
            </Link>
            </div>
        </section>
    )
}

export default TimeLine