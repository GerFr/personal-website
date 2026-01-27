import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
      <div className="min-h-screen">
      <nav className="p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
