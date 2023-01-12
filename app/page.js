"use client"

//react-hook-form
import { FormProvider, useForm } from "react-hook-form";

import React, { Suspense } from "react";
import Content from "./components/content";
import Loader from "./components/loader";


//Styles
import styles from "/app/styles/min/Home.module.css";
import NestedInput from "./components/nestedInput";
import { getData } from "./components/get-data";

const notFound = true

// const key = process.env.OW_KEY
// console.log(key);



const Home = () => {
  const methods = useForm()
  const { register, handleSubmit } = methods;

  //submitHandler
  const submitHandler = async(data) => {
    const lang = data.language
    const currentCountry = data.country
    // console.log(`lang:${lang}, country:${currentCountry}`)
    const myData = await getData()
    console.log(myData.name);
  methods.reset()
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>  { notFound === false ? <p className={styles.notFound}>City not Found</p> : <p className={styles.found}>Einsiedeln</p> }   <span>ch</span> 
        <span>
            <FormProvider { ...methods } >
              <Suspense fallback={Loader}> <NestedInput register={register} handleSubmit={handleSubmit} submitHandler={submitHandler}/> </Suspense>
            </FormProvider>
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
