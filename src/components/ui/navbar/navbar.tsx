import './navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="site-title group-link">
        <li>
          <a href="#home">Home</a>
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
