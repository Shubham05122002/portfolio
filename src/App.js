import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NavBar from './components/nav-bar'
import Me from './components/me'
import Skills from './components/skills'
import Projects from './components/projects'
function App() {
  return (
    <Router>
      <div className='wrapper'> 
        <NavBar/>
        <Routes>
          <Route exact path='/' element = {<Me/>} />
          <Route exact path='/skills' element = {<Skills/>} />
          <Route exact path='/projects' element = {<Projects/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
