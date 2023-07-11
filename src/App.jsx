import { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Idea from "./components/Idea";
import Carousel from "./components/Carousel";
import { References}  from "./components/References";


function App() {
  return (
   <Suspense fallback={'Loading...'}>
     <div className="relative">
      <Header />
      <Intro />
      <Idea />
      <Carousel/>
      <References/>
      <Footer />
     </div>
   </Suspense>
   
  );
}

export default App;
