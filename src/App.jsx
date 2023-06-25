import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Idea from "./components/Idea";
import Carousel from "./components/Carousel";
import { References}  from "./components/References";

function App() {
  return (
    <div className="relative">
      <Header />
      <Intro />
      <Carousel/>
      <hr className="styledHr" style={{height: 3}}/>
      <Idea />
      <br/> 
      <References/>
      <Footer />
    </div>
  );
}

export default App;
