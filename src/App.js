// import React from 'react'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Dishes from './components/Dishes'
// import About from './components/About'
// import Footer from './components/Footer'
// import Contact from './components/Contact'
// import Dashboard from './components/Dashboard'
// //import {  Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const App = () => {
//   return (
//     <div >
//       <Navbar/>
//       <main>
//         <div>
//           <Home/>
//         </div>
//         <div>
//           <Dishes/>
//         </div>
//         <div>
//           <About/>
//         </div>
//         <div>
//         <Contact/>
//         </div>
//         <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </main>
//       <Footer/>
//     </div>
//   )
// }

// export default App
///////////////////
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Dishes from './components/Dishes';
// import About from './components/About';
// import Contact from './components/Contact';
// import Dashboard from './components/Dashboard';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Route pour le Dashboard - SANS Navbar et Footer */}
//         <Route path="/dashboard" element={<Dashboard />} />
        
//         {/* Routes pour les autres pages - AVEC Navbar et Footer */}
//         <Route
//           path="/*"
//           element={
//             <>
//               <Navbar />
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/dishes" element={<Dishes />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//               </Routes>
//               <Footer />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
////////////
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <>
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;