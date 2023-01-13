import React from 'react'

//Styles
import styles from "/app/styles/min/Content.module.css";


const Content = ({temp, feelsLike, minTemp, maxTemp}) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.left}>{temp ? temp : "0.0"} °C</div>
                <div className={styles.right}> <span>feels like</span> {feelsLike ? feelsLike : "0.0"} °C</div>
                
            </div>
            <div className={styles.minmax}>
                <div className={styles.min}>{minTemp ? minTemp : "0.0"} <span>°C</span></div>
                <div className={styles.max}>{maxTemp ? maxTemp : "0.0"}<span>°C</span></div>
            </div>
        </div>
    )
}

export default Content