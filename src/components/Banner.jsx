import "../styles/components/Banner.scss";

const Banner = ({ subtitles, text, backgroundImage }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {subtitles.map((subtitle, index) => (
          <p className="subtitle" key={index}>
            {subtitle}
          </p>
        ))}
        <p className="text">{text}</p>
      </section>
    </div>
  );
};

export default Banner;
