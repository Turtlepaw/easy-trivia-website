import DetailCard from './DetailCard';
import './Details.scss';

export default function Details() {
  return (
    <section id="details">
      <h1>
        Easy Trivia Is...
      </h1>

      <div className="detail-row">
        <DetailCard img="0" text="Small in size and performant" imgAlt=""/>
        <DetailCard img="1" text="Fully typed" imgAlt=""/>
        <DetailCard img="2" text="Easy to learn and use" imgAlt=""/>
      </div>
    </section>
  );
}