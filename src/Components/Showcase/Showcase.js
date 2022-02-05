import './Showcase.scss';
import Description from './Description';

export default function Showcase() {
  return (
    <div id="showcase">
      <img 
        src="https://opentdb.com/images/logo.png" 
        alt="Open Trivia DB" />

      <Description />

      <h3>
        Installation
      </h3>
      <pre><code>
        npm i easy-trivia
      </code></pre>
    </div>
  );
}