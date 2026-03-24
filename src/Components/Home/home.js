import React from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../Api/api';
import styles from './home.module.scss';

function Homepage(){
    const {timeSum, setCount, repCount} = useApi();
    return(
        <>
            <section className={styles.home}>
                <section className={styles.weekly}>
                    <h3>This Week</h3>
                    <div className={styles.weeklyResults}>
                        <div>
                            <div>workouts</div>
                            <div>{setCount}</div>
                        </div>
                        <div>
                            <div>minutes</div>
                            <div>{timeSum/60 < 1 ? 0 :( Math.floor(timeSum / 60))}:{timeSum%60 < 10 ? "0" + timeSum%60 : timeSum%60}</div>
                        </div>
                        <div>
                            <div>reps</div>
                            <div>{repCount}</div>
                        </div>
                    </div>
                </section>

                <section className={styles.quick}>
                    <h3>quick start</h3>
                    <div className={styles.quickStart}>
                        <p>create your first routine</p>
                        <Link to="/routines">tap to get started</Link>
                    </div>
                </section>
                
                <section className={styles.recent}>
                    <h3>recent activity</h3>
                    <div className={styles.recentActivity}>
                        <p>No workouts yet</p>
                        <Link to="/history">start a routine to track your progress</Link>
                    </div>
                </section>
            </section>
        </>
    )
};

export default Homepage;