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
                    <h3>Bachelor in Economics</h3>
                    <h4>University of California, Santa Barbara</h4>
                    <p>Bachelor’s degree in Economics. Participated in the exchange program to University of Oslo from August 2017 to December 2018.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={styles.work}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="Mar 2015 - Nov 2015"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineWork />}

                >
                    <h3>International Orientation Leader</h3>
                    <h4>Santa Barbara, California, USA</h4>
                    <p>Coordinating and planning orientations for international students.</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={styles.work}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="2016 - 2017"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineWork />}

                >
                    <h3>Academic Peer Advisor</h3>
                    <h4>Santa Barbara, California, USA</h4>
                    <p>Academic peer counselor that gives adivices on class registration and helps students get out of academic probation</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={styles.education}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="2019 - 2021"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineMenuBook />}

                >
                    <h3>Master in Economics</h3>
                    <h4>University of Oslo</h4>
                    <p>Economics master’s degree with a focus on statistics and data science.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={styles.work}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="2020 - 2021"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineWork />}

                >
                    <h3>Institute for Social Research</h3>
                    <h4>Oslo, Norway</h4>
                    <p>Received a scholarship to participate in the Arbeid og Velferd (ARV) project in connection to the master’s thesis.</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className={styles.work}
                    contentStyle={{ background: '#e6e7eb', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="2020 - 2021"
                    iconStyle={{ background: '#e6e7eb', color: 'black' }}
                    icon={<MdOutlineWork />}

                >
                    <h3>School of Applied Technology</h3>
                    <h4>Stockholm, Sweden</h4>
                    <p>Intensive three-month full-stack web development with a focus on TDD, mob programming, and applied learning</p>

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