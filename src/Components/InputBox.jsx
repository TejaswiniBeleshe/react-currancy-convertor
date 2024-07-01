import React from "react";
import styles from "../Components/InputBox.module.css"

const InputBox = ({ipName,Ctypes,setFromCur,FromCur,ToCur,setToCur,From,setFrom,To})=>{

    let rounded = Number(To).toFixed(3)
    return(
        <div className={`${styles.inputbox} d-flex justify-content-between align-content-center px-3 py-2`}>
            <div className={`${styles.section}`}>
            <p>{ipName}</p>
            {ipName==='From'?<input type="number" value={From} onChange={(e)=>setFrom(e.target.value)}/>:<input type="number" value={rounded} readOnly/>}
            </div>
            <div className={`${styles.section}`}>
                <p id={styles.type}>Currency type</p>
            <select id={styles.selCoun} value={ipName==='From'?FromCur:ToCur} onChange={(e)=>{
                if(ipName ==='From') setFromCur(e.target.value)
                else setToCur(e.target.value)
            }}>
                {
                    Ctypes.map((ele)=>{
                       return <option key={ele} value={ele}>{ele}</option>

                    })
                }  
            </select>
            </div>
        </div>
    )
}
export default InputBox;