import React from 'react'
import Styles from '../Components/Featured.module.css'
import Lottie from 'lottie-react'
import code from '../Components/animation/code.json'
import phone from '../Components/animation/phone.json'
import last from '../Components/animation/third.json'
import { Slide } from "react-awesome-reveal";

const Featured = () => {
  return (
    <section className={Styles.Container}>
        
        <div className={Styles.Box}>
          <Slide direction='left'>
          <Lottie animationData={code} className={Styles.anim}/>
          </Slide>
          <Slide direction='up'>
          <h4 className={Styles.title}>Start your Tech Journey Here</h4>
          <p className={Styles.sub}>Select from a Variety of Tech Course</p>
          </Slide>
        </div>
       
        <div className={Styles.Box}>
        <Slide direction='down'>
          <Lottie animationData={phone} className={Styles.anim}/>
        </Slide>
        <Slide direction='up'>
          <h4 className={Styles.title}>Determine Your Own Learning Pace</h4>
          <p className={Styles.sub}>Learn from home anywhere anytime </p>
          </Slide>
        </div>
        
        
        <div className={Styles.Box}>
        <Slide direction='right'>
          <Lottie animationData={last} className={Styles.anim}/>
          </Slide>
          <Slide direction='up'>
          <h4 className={Styles.title}>24/7 Technical Support</h4>
          <p className={Styles.sub}>Get assistance and guidance from Experts</p>
          </Slide>
        </div>
        
    </section>
  )
}

export default Featured