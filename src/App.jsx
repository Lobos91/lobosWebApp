import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Installation from "./components/Installation";
import Footer from "./components/Footer";
import Compedium from "./components/Compedium";
import Noobguide from "./components/CompediumPages/Noobguide";
import Lobosguide from "./components/CompediumPages/Lobosguide";
import Changelog from "./components/CompediumPages/Changelog";
import Version from "./components/CompediumPages/LobosGuidePages/Version";

function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Installation" element={<Installation />} />
          <Route path="/Compedium" element={<Compedium />} />
          <Route path="/Compedium/Noobguide" element={<Noobguide />} />
          <Route path="/Compedium/Lobosguide" element={<Lobosguide />} />
          <Route path="/Compedium/Changelog" element={<Changelog />} />
          <Route
            path="/Compedium/Compedium/Lobosguide/Version"
            element={<Version />}
          />
        </Routes>

        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
