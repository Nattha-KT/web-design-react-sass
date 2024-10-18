import { Hero, Leading, Mobile, Navbar } from './components';

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
      </main>
    </>
  );
}

export default App;
