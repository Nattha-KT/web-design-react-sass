import './_hero.scss';
export default function Hero() {
  return (
    <section className=" hero ">
      <div className="hero-container">
        <p className=" title">Introduce Your Product Quickly & Effectively</p>
        <p className=" sub-title text-secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className=" hero-btn ">
          <button className=" btn-primary text-white">Purchase UI Kit</button>
          <button className=" hero-btn-outlined ">Learn More</button>
        </div>
      </div>
    </section>
  );
}
