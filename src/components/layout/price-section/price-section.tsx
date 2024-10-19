import './price.scss';
export default function Price() {
  return (
    <section className=" price-container" aria-labelledby="price-section">
      <div className=" price-content">
        <h2 className=" topic-section">A Price To Suit Everyone</h2>
        <p className=" text-secondary sub-topic">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{' '}
        </p>
        <p className="price-dolar">
          <span>$40</span>
          <span>UI Design Kit</span>
        </p>
        <div className=" price-pourchase">
          <span>See, One price. Simple.</span>
          <button className=" btn-primary text-white">Purchase Now</button>
        </div>
      </div>
    </section>
  );
}
