import { Button } from '../button';
import './navbar.scss';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="site-title group-btn">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
      <p className="nav-head">Landing</p>
      <Button />
    </nav>
  );
}
