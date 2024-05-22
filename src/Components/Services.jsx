import React from 'react'
import Styles from '../Components/Services.module.css'
import Prog from '../Images/pro.png'
import Web from '../Images/web.png'
import Android from '../Images/mobile.png'
import Graphic from '../Images/graphic.png'
import Data from '../Images/database.png'



const Services = () => {
  return (
    <section className={Styles.Container}>
        <div className={Styles.ser}>
        <h2>SERVICES</h2>
        <img width="500px" className={Styles.image} src={Prog}/>
        </div>
        
        <div className={Styles.content}>
          <div className={Styles.Box}>
              <img src={Web} className={Styles.web}/>
              <div>
              <h2>WEB DEVELOPMENT</h2>
              <p>We develop Static and Dynamic websites at Affordable prices with free 6 months site maintenance</p>
              </div>
              
          </div><br></br>
          <div className={Styles.Box}>
          <img src={Android} className={Styles.web}/>
             <div>
             <h2>IOS/ANDROID APP DEVELOPMENT</h2>
              <p>We develop all kinds of Mobile Apps and with database Management services</p>
             </div>
             
          </div><br></br>
          <div className={Styles.Box}>
          <img src={Graphic} className={Styles.web}/>
          <div>
          <h2>GRAPHICS DESIGNS</h2>
              <p>We designs all kinds of Flyers, Logos , T-Shirt Designs and Photo Enhancement</p>
          </div>
             
          </div><br></br>
          <div className={Styles.Box}>
          <img src={Data} className={Styles.web}/>
          <div>
          <h2>DATABASES</h2>
              <p>We design databases for schools, Church , Businesses and organization </p>
          </div>
              
          </div>
        </div>
        
       
    </section>
  )
}

export default Services