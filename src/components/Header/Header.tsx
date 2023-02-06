import "./styles.scss";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <nav className="header__nav">
        <a className="header__nav-link" href="#">
          Features
        </a>
        <a className="header__nav-link" href="#">
          Partners
        </a>
        <a className="header__nav-link" href="#">
          Stories
        </a>
      </nav>
      <button className="header__btn">Download for free</button>
    </div>
  );
};
