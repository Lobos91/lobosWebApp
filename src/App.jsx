import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Idea from "./components/Idea";
import Carousel from "./components/Carousel";
import { References}  from "./components/References";
import { Modal } from "./components/Modal";

function App() {
  return (
    <div className="relative">
      <Header />
      <hr className="styledHr" style={{ height: 4 }} />
      <Intro />
      <Idea />
      <Carousel/>
      <hr className="styledHr" style={{height: 3}}/>
     
      <br/> 
      <References/>
     
      <Footer />
    </div>
  );
}

export default App;
