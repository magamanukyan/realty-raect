import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g__wrapper">
      <div className="paddings innerWidth g__container">
        <div className="flexColCenter inner__container">
          <span className="primaryText">Get started with MyRealty</span>
          <span className="secondaryText">Subscribe and find super attractive price quotes from us.
            <br/>
          Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:info@my.am">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
