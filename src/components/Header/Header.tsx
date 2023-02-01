import "./styles.scss";
import logo from "../../assets/icons/Vector.svg";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="header__img" />

      <nav className="header__nav">
        <a href="#">Features</a>
        <a href="#">Partners</a>
        <a href="#">Stories</a>
      </nav>
      <div className="header__btn">
        <button>Download for free</button>
      </div>
    </div>
  );
};
