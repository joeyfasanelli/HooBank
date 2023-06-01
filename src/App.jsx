import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Billing from './components/Billing'
import Business from './components/Business'
import CardDeal from './components/CardDeal'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero></Hero>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats></Stats>
        <Business></Business>
        <Billing></Billing>
        <CardDeal></CardDeal>
        <Testimonials></Testimonials> 
        <Clients></Clients> 
        <Cta></Cta>
        <Footer></Footer> 
      </div>
    </div>

    </div>
  )
}

export default App
