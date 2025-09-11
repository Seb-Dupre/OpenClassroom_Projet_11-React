import "../main.css";

const Features = ({ features }) => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img
            src={feature.icon}
            alt={`${feature.title} Icon`}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
