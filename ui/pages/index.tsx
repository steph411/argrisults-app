// import Head from 'next/head'
import {GetServerSideProps} from 'next'
import { Header, Hero, MainContent,NewsletterSub, Footer, MapModal }  from '../components'
import { getDailyWeather, getForecasts} from '../services'
import React, {useState} from 'react'
import { appContext } from '../context'
  

export default function Home({ dailyWeather, forecasts }) {
  
  const [state, setState] = useState({showMap: false})
  const toggleShowMap = () => setState((old) => ({...old, showMap:!old.showMap}))

  const [appData, setAppData] = useState({ dailyWeather, forecasts });
  const [{ lon, lat }, setLonLat] = useState({ lon: "12.354722", lat: "7.369722" })
  
  const closeModal = () => {
    setState(old => ({showMap: false}))
  }

  const updateLonLat = async (lat, lon) => {
    try {
      
      const dailyWeather = await getDailyWeather(lat, lon);
      const forecasts = await getForecasts(lat, lon);
      setAppData(old => ({ dailyWeather, forecasts }));
      setState((old) => ({ ...old, showMap: false }));
      
    } catch (error) {
      console.log(error);
      setState((old) => ({ ...old, showMap: false }));
    }
  }

  return (
    <appContext.Provider value={{showMap: state.showMap, toggleShowMap:toggleShowMap}}>
      <Header />
      <Hero/>
      <MainContent
        dailyWeather={appData.dailyWeather}
        forecasts={appData.forecasts}
      />
      <NewsletterSub/>
      <Footer />
      {state.showMap && <MapModal updateLonLat={updateLonLat} closeModal={closeModal}/>}
    </appContext.Provider>
  )

}


export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    
    const defaultLat = "7.369722"
    const defaultLon = "12.354722"
    const dailyWeather = await getDailyWeather(defaultLat, defaultLon);
    const forecasts = await getForecasts(defaultLat, defaultLon);
  
    return {
      props: {
        dailyWeather,
        forecasts
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props:{}
    }
  }

}