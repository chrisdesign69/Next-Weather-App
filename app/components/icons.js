import Image from 'next/image'
import React from 'react'


import styles from "/app/styles/min/Icon.module.css"

const Icons = ({description, icon}) => {
    return (
        <div className={styles.container}>
            <div className="description"><p>{description ? description : ""}</p></div>
            <div className={styles.icon}>
                <Image src={`http://localhost:3000/icons/${icon}.svg`} width={150} height={150} alt="Icons"/> 
                </div>
        </div>
    )
}

export default Icons