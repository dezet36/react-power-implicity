import "./styles.scss";

export const Card = () => {
  return (
    <div className="card">
      <h2 className="card__title">The Power of Simplicity</h2>
      <p className="card__description">
        Instead of spending time searching for the right app, our AI will bring
        the right app to you.
      </p>
      <button className="card__btn">Learn</button>
    </div>
  );
};
