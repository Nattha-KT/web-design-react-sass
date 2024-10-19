import { MapIcon } from '@/libs';
import './company.scss';
export default function Company() {
  return (
    <section className=" company ">
      <div className="company-img"></div>
      <div className="company-container">
        <div className="company-content">
          <p className=" topic-section">Light, Fast & Powerful</p>
          <p className=" sub-topic text-secondary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className=" group-items ">
            {Array.from({ length: 4 }).map(() => (
              <div className="item ">
                <MapIcon />
                <h5>Title Gose Here</h5>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  alias nulla numquam saepe.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
