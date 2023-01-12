import React from 'react'

//Styles
import styles from "/app/styles/min/Content.module.css";


const Content = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>37 <span>°C</span></div>
            <div className={styles.minmax}>
                <div className={styles.min}>5 <span>°C</span></div>
                <div className={styles.max}>5 <span>°C</span></div>
            </div>
        </div>
    )
}

export default Content