import React  from 'react'
import Pic from '../Images/kl.png'
import Styles from '../Components/Home.module.css'


const Home = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, Welcome</h1>
        <p className={Styles.desc}>
          I am a Full Stack Developer and a Graphic Designer with experience.<br/> Reach out if you would like to engage 
          any of our services. <br/>I have the best prices on the market. <br/>
          I also offer course tutorials on various technologies 
        </p>
        < a className={Styles.contact} href=''>Contact Us</a>

        
      
      </div>

      <img src={Pic} alt='Picture' className={Styles.image}/>
    
    
    </section>
  )
}

export default Home