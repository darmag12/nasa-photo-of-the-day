import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import DateForm from "./components/DateForm";
import PhotoDisplay from "./components/PhotoDisplay";



function App() {

const [data, setData] = useState([]);
const [date, setDate] = useState('');

useEffect( ()=> {
const fetchData = () => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=6KVg1jJIEWTFQTcFIaa47acZm2o6WFNuup3W7ij0&date=${date}`)
    .then( res => {
      setData(res.data)
      console.log(res)
    })
    .catch( err => console.log('Fetch error: ',err))

  }

  fetchData()
}, [date])

let changeHandler = e => {
  setDate(e.target.value)
}


  return (
    <div className="App">
      <h1>
        Nasa Photo of The Day!🚀
      </h1>
      <DateForm  date={date} change={changeHandler}/>
      <PhotoDisplay photo={data} />
    </div>
  );
}

export default App;
