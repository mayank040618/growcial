import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Footer from './components/sections/Footer';
import Preloader from './components/ui/Preloader';

function App() {
  return (
    <div className="app-container">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
