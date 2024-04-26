import Header from "./components/Header";
import Hero from "./components/Hero";
import Special from "./components/Special";
import Projects from "./components/Projects";
import Place from "./components/Place";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
 <>

  <Header />
  <main className="main">
    <Hero />
    <Special />
    <Projects />
    <Place />
    <Blog />
    <Footer />
    </main>
  
  </>
  );
}

export default App;
