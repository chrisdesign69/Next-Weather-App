import React from 'react'

import { LineWave } from "react-loader-spinner"
const Loader = () => {
    return (
        <LineWave 
        height="50"
        width="50"
        color="#4fa94d"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor="#7e2f7e"
        middleLineColor="#da1fda"
        lastLineColor="#710771"
        />
    )
}

export default Loader