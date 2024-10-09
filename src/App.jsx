import './App.css'
import Download from './sections/Download'
import Faq from './sections/Faq'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'
import Testimonals from './sections/Testimonals'

// https://zoraedits.netlify.app/
function App() {

  return (
    <>
    <main className=''>
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonals/>
      <Download/>
      <Footer/>
    </main>
    </>
  )
}

export default App
