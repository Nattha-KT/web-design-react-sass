import './navbar.scss';
export default function Navbar() {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > window.innerHeight * 0.2) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    // <nav className={`navbar ${scrolled ? 'scrolled' : '}`}>
    <nav className="navbar">
      <ul className="site-title group-link">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="nav-head">Landing</p>
      <button className="btn-primary text-white">Buy Now</button>
    </nav>
  );
}
