import React from 'react';
import styles from './navigation.module.scss';
import { NavLink} from 'react-router-dom';

function Navigation(){
    return (
        <>
            <nav  className={styles.appNav}>
                <ul className={styles.navList}>
                    <li><NavLink className={({isActive}) => (isActive ? styles.active : styles.inactive)} to="/">home</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? styles.active : styles.inactive)} to="exercises">exercise</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? styles.active : styles.inactive)} to="routines">routines</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? styles.active : styles.inactive)} to="history">history</NavLink></li>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;
