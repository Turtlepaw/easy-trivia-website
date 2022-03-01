import './DocumentationCard.scss';

export default function DocumentationCard(props) {
  return (
    <section className="documentation-card" id={props.id}>
      <h4>
        {props.title}
      </h4>
      <p>
        {props.description}
      </p>
    </section>
  );
}