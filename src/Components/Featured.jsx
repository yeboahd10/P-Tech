import React from 'react'
import Styles from '../Components/Featured.module.css'
import Lottie from 'lottie-react'
import code from '../Components/animation/code.json'
import phone from '../Components/animation/phone.json'
import last from '../Components/animation/third.json'

const Featured = () => {
  return (
    <section className={Styles.Container}>
        <div className={Styles.Box}>
          <Lottie animationData={code} className={Styles.anim}/>
          <h4 className={Styles.title}>Start your Tech Journey Here</h4>
          <p className={Styles.sub}>Select from a Variety of Tech Course</p>
        </div>
        <div className={Styles.Box}>
          <Lottie animationData={phone} className={Styles.anim}/>
          <h4 className={Styles.title}>Determine Your Own Learning Pace</h4>
          <p className={Styles.sub}>Learn at the comfort of your home anywhere anytime </p>
        </div>
        <div className={Styles.Box}>
          <Lottie animationData={last} className={Styles.anim}/>
          <h4 className={Styles.title}>24/7 Technical Support</h4>
          <p className={Styles.sub}>Get assistance and guidance from Experts</p>
        </div>
    </section>
  )
}

export default Featured