import { MapIcon } from '@/libs';
import './mobile.scss';
export default function Mobile() {
  return (
    <section className=" mobile ">
      <div className="mobile-container">
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
        <div className=" group-items ">
          {Array.from({ length: 4 }).map(() => (
            <div className="item ">
              <MapIcon />
              <h5>Title Gose Here</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                alias nulla numquam saepe.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mobile-img"></div>
    </section>
  );
}
