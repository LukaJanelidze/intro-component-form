import Title from './components/Title/Title'
import Rectangle from './components/Rectangle/Rectangle'
import Inputs from './components/Inputs/Inputs'
import './App.css'

function App() {

  return (

      <div className='box'>
        <Title/>
        <div className='info'>
        <Rectangle/>
        <Inputs />
        </div>
      </div>

  )
}

export default App;
