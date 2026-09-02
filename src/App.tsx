import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="app-container">
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
