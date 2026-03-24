import React from 'react';
import styles from './header.module.scss';


const user = "Mike Jones"
function Header(){
    return(
        <>
            <header className={styles.header}>
                <p>Welcome back, </p><h2>{user}</h2>
            </header>
        </>
    )
};

export default Header;