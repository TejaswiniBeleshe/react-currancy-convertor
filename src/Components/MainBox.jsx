import React, { useEffect, useState } from "react";
import styles from "../Components/MainBox.module.css"
import InputBox from "./InputBox";
import axios from "axios";

const MainBox = ()=>{
    const [From,setFrom] = useState(1);
    const [To,setTo] = useState('0');
    const [FromCur,setFromCur] = useState('usd');
    const [ToCur,setToCur] = useState('inr');
    const [Ctypes,setCtypes] = useState([]);
    const [Data,setData] = useState({});

    useEffect(()=>{
        const getData = async()=>{
            const response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${FromCur}.json`);
            //console.log(response.data[FromCur])
            setData(response.data[FromCur]);
            let arr = Object.keys(response.data[FromCur]);
            let [a,b,c,d,e,f,g,...res]= arr;  
            //console.log(res)
            setCtypes(res)
        } 
        getData();
    },[FromCur])
    let getConverted =()=>{
        setTo(Data[ToCur]*From)
    }
    let swapBetween = ()=>{
        setFromCur(ToCur);
        setToCur(FromCur);
    }
    return(
        <div className={`${styles.mainbox} p-4 d-flex flex-column justify-content-around`}>
           {/* {"from"} {From}{'To'} {To} {"FromCur"} {FromCur} {"Tocur"} {ToCur} */}
            <p id={styles.heading}>CURRANCY CONVERTOR</p>
            <InputBox ipName="From" Ctypes={Ctypes} FromCur={FromCur} setFromCur={setFromCur} setFrom={setFrom} From={From}/>
            <InputBox ipName="To" Ctypes={Ctypes} ToCur={ToCur} setToCur={setToCur} To={To}/>
            <button className={`${styles.btn} p-3`} onClick={getConverted}>CONVERT {FromCur.toUpperCase()} TO {ToCur.toUpperCase()}</button>
            <button className={styles.swapBtn} onClick={swapBetween}>SWAP</button>
        </div>
    )
}

export default MainBox;