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
import { Bounce } from "react-awesome-reveal";


const Courses = () => {
  return (
    <section className={Styles.container}>
        <div className={Styles.title}>
            <h3>COURSES</h3>
        </div>
        <Bounce>
        <div className={Styles.first}>
        <div className={Styles.Box}>
          <img src={HTML} width='80px'/>
          <p>HTML</p>  
        </div>
        <div className={Styles.Box}>
          <img src={CSS} width='80px' />
          <p>CSS</p>  
        </div>
        <div className={Styles.Box}>
          <img src={Java} width='80px'/>
          <p>JAVASCRIPT</p>  
        </div>
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
        </div>
        </Bounce>
        
        
       
        
    </section>
  )
}

export default Courses