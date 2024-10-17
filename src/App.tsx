import { Hero, Leading, Navbar } from './components';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=" main-container">
        <Hero />
        <Leading />
      </main>
    </>
  );
}

export default App;
