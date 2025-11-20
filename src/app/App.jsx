import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../ui/components/navbar";
import Footer from "../ui/components/footer";
import Footer from "../ui/components/banner";
import Home from "../ui/views/Home";
import Products from "../ui/views/Products";
import Contact from "../ui/views/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

