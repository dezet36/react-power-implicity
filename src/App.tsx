import { Header } from "./components/Header/Header";
import { Sliders } from "./components/Slider/Slider";
import "./ui/styles.scss";

export const App = () => {
  return (
    <div className="hero">
      <Header />
      <Sliders />
    </div>
  );
};
