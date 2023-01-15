import './App.css';
import Bodytop from './components/Bodytop/Intro'
import Cards from './components/Cards/Cards';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <Bodytop />
      <Cards />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
