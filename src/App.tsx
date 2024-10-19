import {
  About,
  Company,
  Contact,
  Hero,
  Leading,
  Mobile,
  Navbar,
  Price,
} from './components';

function App() {
  return (
    <>
      <header>
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
    </>
  );
}

export default App;
