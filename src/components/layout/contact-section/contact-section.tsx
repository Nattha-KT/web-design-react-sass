import './contact.scss';
export default function Contact() {
  return (
    <section className=" contact ">
      <div className="contact-img"></div>
      <div className="contact-container">
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
        <button className=" btn-primary text-white">Purchase UI Kit</button>
      </div>
    </section>
  );
}
