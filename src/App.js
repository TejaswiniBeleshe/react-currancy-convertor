import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MainBox from "./Components/MainBox";


function App() {
  // let [curr,setCurr] = useState('usd');
  // let [want,setWant] = useState('inr');
  // let [arr,setArr] = useState([]);
  // let [res,setRes] = useState({});
  // let [input,setInput] = useState(0);
  // useEffect(()=>{
  //   let getData = async ()=>{
  //     let response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`);
  //     let obj = response.data[curr];
  //     console.log(obj)
  //     setArr(Object.keys(obj));
  //     setRes(obj);
  //   }
  //   getData();
  // },[curr])

  // let data = res[want].toFixed(3);
  return (
    <div className="App d-flex justify-content-center align-items-center">
        {/* <select value={curr} onChange={(e)=>setCurr(e.target.value)}>
          {
            arr.map((ele)=>{
              return <option value={ele}>{ele}</option>
            })
          }
        </select>
        <select value={want} onChange={(e)=>setWant(e.target.value)}>
          {
            arr.map((ele)=>{
              return <option value={ele}>{ele}</option>
            })
          }
        </select>
        <input type="number" min={1} value={input} onChange={(e)=>setInput(e.target.value)} />
        <span>{res[want]*input}</span> */}
        
        <MainBox/>
    </div>
  );
}

export default App;
