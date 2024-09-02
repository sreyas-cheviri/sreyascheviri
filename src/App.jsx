import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Work from "./pages/Work"; // Import the WorkPage component
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <ContactFooter />
      </div>
    </Router>
  );
}

export default App;
