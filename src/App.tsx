import { About, Contact, Hero, Leading, Mobile, Navbar } from './components';

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
        <Contact />
      </main>
    </>
  );
}

export default App;
