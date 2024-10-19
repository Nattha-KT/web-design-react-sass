import {
  FacebookIcon,
  InstragramIcon,
  LinkinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/libs';
import '@styles/layout/_footer.scss';
export default function Footer() {
  return (
    <footer className="footer-container " aria-label="Website footer">
      <div className="head-footer">
        <span> &copy;2023 Yourcompany</span>
        <h4 className="  text-heading">Landing</h4>
        <button className=" text-white">Purchase Now</button>
      </div>
      <div className="horizontal-line"></div>
      <div className=" group-btn-footer">
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

        <ul className="site-title group-link">
          <li>
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkinIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <YoutubeIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <InstragramIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
