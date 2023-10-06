
import './App.css'
import Info from './assets/components/Info'
import About from './assets/components/About'
import Interests from './assets/components/Interests'
import Footer from './assets/components/Footer'

function App() {
  return (
    <div className='card'>
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App
