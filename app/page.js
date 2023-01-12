import React from "react";

//Styles
import styles from "/app/styles/min/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Einsiedeln <span>ch</span> 
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
      <div className={styles.contents}>contents</div>
    </div>
  );
};

export default Home;
