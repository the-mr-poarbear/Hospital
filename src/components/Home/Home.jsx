import { useState } from 'react'
import './Home.css'
import CardHome from '../CardHome/CardHome.jsx'
import gi from '../../assets/media/hospital.jpg'
import NavigationBar from '../NavigationBar/NavigationBar.jsx'
import wave from '../../assets/media/waveHome.svg';
import CardYCU from '../CardYCU/CardYCU.jsx'
import beatHeart from "../../assets/media/heartbeat.png"
import Footer from '../Footer/Footer.jsx'



function Home() {

  return (
    <>
    <NavigationBar/>
    <img className='w-100 imgHome' src={gi}></img>
    <div className='row d-flex justify-content-evenly temp'>
      <CardHome title={'View Doctors'}  body={'search doctors by name and view them based on rating'}/>
      <CardHome title={'View Results'}  body={'Enter Visit or File ID to view results'}/>
      <CardHome title={'Locations'}  body={'search doctors by name and view them based on rating'}/>
    </div>
    
    <div className='YCUDiv'>
      <img src={wave} className='wave'></img>
      <h1 className=' YCU text-center w-100 text-white'>Why Choose Us</h1>
    </div>

    <div className='row d-flex justify-content-evenly backYCU'>
      <CardYCU icon={beatHeart} title="We Care For Our peitients"/>
      <CardYCU icon={beatHeart} title="We Care For Our peitients"/>
      <CardYCU icon={beatHeart} title="We Care For Our peitients"/>
    </div>
      
    <Footer/>
    </>
  )
}

export default Home
