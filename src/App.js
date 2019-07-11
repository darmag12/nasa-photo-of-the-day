import React, { useState, useEffect } from "react";
import axios from 'axios'
import DateForm from "./components/DateForm";
import PhotoDisplay from "./components/PhotoDisplay";
import { WrapperApp } from "./components/Styles";
import { HeadingH1 } from "./components/Styles";



function App() {

const [data, setData] = useState([]);
const [date, setDate] = useState('');


useEffect( ()=> {
const fetchData = () => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DNHHO0zcS1YFNJ005eFCq56wy4UzlDWYPp6QaBu7&date=${date}`)
    .then( res => {
      setData(res.data)
      // console.log(res)
    })
    .catch( err => console.log('Fetch error: ',err))

  }

  fetchData();
}, [date])

let changeHandler = e => {
  setDate(e.target.value)
}

  return (
    <WrapperApp>
      <HeadingH1>
        Nasa Photo of The Day!🚀
      </HeadingH1>
      <DateForm  date={date} change={changeHandler}/>
      <PhotoDisplay photo={data} />
    </WrapperApp>
  );
}

export default App;
