import './navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="site-title group-link">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p className="nav-head">Landing</p>
      <button className="btn-primary text-white">Buy Now</button>
    </nav>
  );
}
