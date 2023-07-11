import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Installation from "./components/Installation";
import Footer from "./components/Footer";
import Compedium from "./components/Compedium";

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Installation" element={<Installation />} />
          <Route path="/Compedium" element={<Compedium />} />
        </Routes>

        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
