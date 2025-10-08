import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import AddStudent from './components/AddStudent.jsx'
import UpdateStudent from './components/UpdateStudent.jsx'
import DisplayStudent from './components/DisplayStudent.jsx'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />

        {/* Main Content Area */}
        <div className="flex-grow-1 main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />

            <Route path="/add" element={<AddStudent />} />
            <Route path="/display" element={<DisplayStudent />} />
            <Route path="/update/:id" element={<UpdateStudent />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
