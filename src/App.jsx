
import Styles from './App.module.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import Courses from './Components/Courses'
import Featured from './Components/Featured'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
      <div className={Styles.App}>
        <Navbar/>
        <Home/>
        <Services/>
        <Courses/>
        <Featured/>
        <About/>
        <Footer/>
      </div>
    </>
  )
}

export default App
