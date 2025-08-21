
import './index.css'
import Header from './header'
import Home from  './home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about.js';
import Footer from './footer.js';
import Skills from './skills.js';
import Contact from './contact.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          </Routes>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
        <Routes>
          <Route path='/skills' element={<Skills />} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
         </Routes>
      </div>
       <Footer />
    </div>
    </Router>
  );
}

export default App;
