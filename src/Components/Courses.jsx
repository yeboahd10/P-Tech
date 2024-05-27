import React from 'react'
import Styles from '../Components/Courses.module.css'
import HTML from '../Images/html.png'
import CSS from '../Images/css.png'
import Java from '../Images/javas.png'
import Php from '../Images/php.png'
import Photo from '../Images/photo.png'
import Word from '../Images/word.png'
import Excel from '../Images/excel1.png'
import Kotlin from '../Images/kotlin.jpg'
import flutter from '../Images/flutter.png'
import { Roll } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";


const Courses = () => {
  return (
    <section className={Styles.container}>
        <div className={Styles.title}>
            <h3>COURSES</h3>
        </div>
        
        <div className={Styles.first}>
        <div className={Styles.Box}>
        <Roll>
          <img src={HTML} width='80px'/>
          </Roll> 
          <p>HTML</p>
          
        </div>
        <div className={Styles.Box}>
        <Roll>
          <img src={CSS} width='80px' />
          </Roll>
          <p>CSS</p> 
          
        </div>
        <div className={Styles.Box}>
        <Roll>
          <img src={Java} width='80px'/>
          </Roll>
          <p>JAVASCRIPT</p>  
          
          
        </div>
        <Zoom>
          
        <div className={Styles.Box}>
          <img src={Php} width='80px'/>
          <p>PHP</p>  
        </div>
        <div className={Styles.Box}>
          <img src={Photo} width='80px'/>
          <p>PHOTOSHOP</p> 
        </div>
        <div className={Styles.Box}>
          <img src={Word} width='80px'/>
          <p>M.S WORD</p>  
        </div>
        </Zoom>
        <Slide>
        <div className={Styles.Box}>
          <img src={Excel} width='80px'/>
          <p>M.S EXCEL</p>  
        </div>
        <div className={Styles.Box}>
          <img src={Kotlin} width='80px'/>
          <p>KOTLIN</p>  
        </div>
        <div className={Styles.Box}>
          <img src={flutter} width='80px'/>
          <p>FLUTTER</p>  
        </div>
        </Slide>
        </div>
        
        
        
       
        
    </section>
  )
}

export default Courses