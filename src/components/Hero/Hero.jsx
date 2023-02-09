import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { Button } from '@mui/material'

const Hero = () => {
 const transition = {type:'spring',duration :3}

  return (
    <div className="hero">
      <div className="blur hero-blur">
       
      </div>
      <div className="left-h">
     <Header/>
     <div className="the-best-ad">
      <div>
      initial = {{left:'238px'}}
      whileInview={{left:'8px'}}
      transition={transition}
      </div>
      <span>The best fitness club in the town</span>
     </div>

     <div className="hero-text">
      <div><span className='stroke-text'>Shape </span>
      <span>Your</span></div>
      <div><span> Ideal body</span></div>
      <div>
      <span> In here we will help you to shape and build your ideal body and live up your life to fullest</span>
     </div>
     </div>
     {/* Figures */}
     <div className="figures">
      <div>
      <span>+140</span>
      <span>export coaches </span>
      </div>
      <div>
      <span>+978</span>
      <span>members joined </span>
      </div>
      <div>
      <span>+50</span>
      <span>fitness programs</span>
      </div>
      </div>
      {/* hero button */}
      <div className="hero-buttons">
        <Button  className='btn' >Get Started</Button>
        <Button className="btn" >Learn More</Button>
      </div>
     </div>

      <div className="right-h">
      <Button variant='contained'style={{backgroundColor:'white'}} className='btn' >Join Now</Button>

      <div className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span> 116 bpm</span>
      </div>
      {/* hero image */}
      <img src={hero_image} alt="" className='hero-image' />
      <img src={hero_image_back} alt="" className='hero-image-back' />
      { /* calories */}
      <div className="calories">
        <img src={Calories} alt="" />
      <div>
        <span>Calories Burned</span>
        <span>220 kcal</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero;
