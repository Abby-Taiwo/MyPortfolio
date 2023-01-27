import React from "react";
import AllPages from "./components/allPages";
import HandoutDetails from "./components/handoutDetails";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<AllPages />}/>
      <Route path="/handout-details" element={<HandoutDetails />}/>
    </Routes>
    // <div className="bg-deepPurple p-4 min-h-screen flex flex-col gap-8">
    //   <Nav />
    //   <Home />
    //   <About />
    //   <Projects />
    //   {/* <Contact /> */}
    //   {/* <Footer/> */}
    // </div>
  );
}

export default App;
