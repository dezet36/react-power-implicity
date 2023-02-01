import "./styles.scss";
import { Card } from "../Card/Card";

export const Sliders = () => {
  return (
    <div className="slider">
      <Card />
      <ul>
        <li className="dot__active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
