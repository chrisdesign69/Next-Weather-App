"use client"


import React, { Suspense } from "react";
import Content from "./components/content";
import Loader from "./components/loader";

//Styles
import styles from "/app/styles/min/Home.module.css";

const notFound = true

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>  { notFound === false ? <p className={styles.notFound}>City not Found</p> : <p className={styles.found}>Einsiedeln</p> }   <span>ch</span> 
        <span>
            <form>
                <select name="language" id=""> 
                    <option value="de">de</option> 
                    <option value="en">en</option> 
                    <option value="fr">fr</option> 
                    <option value="it">it</option> 
                </select>
                <input type="text" name="country" id="country" required autoComplete="off" />
                <label htmlFor="country">country</label>
            </form>
        </span>
      </div>
        
      <div className={styles.icon}>icon</div>
      <div className={styles.contents}>
        <Suspense fallback={Loader}>
            <Content />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
