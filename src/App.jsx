import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

export default function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false)

  function handleToggleBar(state){
    setShowModel(!showModel)
  }
  
  useEffect(() =>{
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return
      }
      localStorage.clear()
      try{
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
      } catch(e){
        console.log(e.message());
      }
    }
    fetchAPIData();
  },[])

  return (
    <>
      {data ? (<Main data={data} />) : (
         <div className='loadingState'>
          <i className="fa-solid fa-gear"></i>
         </div>
      )}
      {showModel && (<SideBar data={data} handleToggleBar = {handleToggleBar}/>)}
      {data && (<Footer data={data} handleToggleBar = {handleToggleBar}/>) }
    </>
  )
}