import './about.scss';
export default function About() {
  return (
    <section id="about" className=" about " aria-labelledby="about-section">
      <div className="about-img"></div>
      <div className="about-container">
        <div>
          <p className=" topic-section">Light, Fast & Powerful</p>
          <p className=" sub-topic text-secondary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
    </section>
  );
}
