import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Idea from "./components/Idea";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Carousel/>
      <hr className="transitHr" />
      <Idea />
    
      <br/> <br/>
      <Footer />
    </div>
  );
}

export default App;
