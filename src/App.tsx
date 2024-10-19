import {
  About,
  Company,
  Contact,
  Footer,
  Hero,
  Leading,
  Mobile,
  Navbar,
  Price,
} from './components';

function App() {
  return (
    <>
      <header aria-label="Website header">
        <Navbar />
      </header>
      <main className=" main-container">
        <Hero />
        <Leading />
        <Mobile />
        <About />
        <Company />
        <Contact />
        <Price />
      </main>
      <Footer />
    </>
  );
}

export default App;
