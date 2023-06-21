import React from "react"



import {Routes, Route, Link} from 'react-router-dom'
import "./App.css"
import Header from "./components/page-components/Header"
import Home from "./components/Home"
import Footer from "./components/page-components/Footer"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
function App() {
 
  return (
    <div className="App">
      <Header />
     <main className="main-body">
      <hr />
      <Routes>
        <Route path = "/" element = {<Home />} />
      <Route path = "/resume" element = {<Resume />} />
      <Route path = "/contact" element = {<Contact />} />
      </Routes>
     </main>
     <Footer />
    </div>
  )
}

export default App
