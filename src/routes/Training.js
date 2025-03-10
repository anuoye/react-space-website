import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'
import Footer from '../components/Footer'

const Training = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='TRAINING' text='Pre-Flight & In-Flight Training'/>
        <TrainingSection/>
        <Footer/>
    </div>
  )
}

export default Training