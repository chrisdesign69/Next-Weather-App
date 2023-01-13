"use client"

//react-hook-form
import { FormProvider, useForm } from "react-hook-form";

import React, { Suspense, useState } from "react";
import Content from "./components/content";
import Loader from "./components/loader";


//Styles
import styles from "/app/styles/min/Home.module.css";


import NestedInput from "./components/nestedInput";
import { getData } from "./components/get-data";
import Icons from "./components/icons";

const notFound = true

// const key = process.env.OW_KEY
// console.log(key);



const Home = () => {
  
  const [name, setName] = useState("")
  const [temp, setTemp] = useState("")
  const [feelsLike, setFeelsLike] = useState("")
  const [minTemp, setMinTemp] = useState("")
  const [maxTemp, setMaxTemp] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")


  const methods = useForm()
  const { register, handleSubmit } = methods;

  //submitHandler
  const submitHandler = async(data) => {
    const lang = data.language
    const currentCountry = data.country
    // console.log(`lang:${lang}, country:${currentCountry}`)
   
    const myData = await getData(lang, currentCountry)
    const [newName, newDescription, newIcon, newTemp, feels_Like, newMinTemp, newMaxTemp, newCountryCode] = [myData.name, myData.weather[0].description, myData.weather[0].icon, myData.main.temp, myData.main.feels_like, myData.main.temp_min, myData.main.temp_max, myData.sys.country]
    setName(newName)
    setDescription(newDescription)
    setIcon(newIcon)
    setTemp(newTemp)
    setMinTemp(newMinTemp)
    setMaxTemp(newMaxTemp)
    setFeelsLike(feels_Like)
    setCountryCode(newCountryCode)
    // console.log(myData.sys.country)
    



const icon = "01d"
    
  methods.reset()
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>  { notFound === false ? <p className={styles.notFound}>City not Found</p> : <p className={styles.found}>{ name || <span>please set country</span>  }</p> }   <span className={styles.countryCode}>{countryCode ? countryCode : ""}</span> 
        <span>
            <FormProvider { ...methods } >
              <Suspense fallback={Loader}> <NestedInput register={register} handleSubmit={handleSubmit} submitHandler={submitHandler}/> </Suspense>
            </FormProvider>
        </span>
      </div>


      {/* `http://localhost:3000/icons/${icon}.svg` */}
        
      <div className={styles.icon}>
        <Suspense fallback={Loader}> <Icons description={description} icon={icon} /> </Suspense>
      </div>
      <div className={styles.contents}>
        <Suspense fallback={Loader}>
            <Content temp={temp} minTemp={minTemp} maxTemp={maxTemp} feelsLike={feelsLike}   />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
