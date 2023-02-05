import "./styles.scss";
import { Card } from "../Card/Card";

export const Sliders = () => {
  return (
    <div className="slider">
      <Card />
      <ul className="slider__dots">
        <li className="slider__dots-dot"></li>
        <li className="slider__dots-dot"></li>
        <li className="slider__dots-dot dot__active"></li>
        <li className="slider__dots-dot"></li>
        <li className="slider__dots-dot"></li>
      </ul>
    </div>
  );
};
