import './Showcase.scss';

export default function Showcase() {
  return (
    <section id="showcase">
      <img 
        src="https://opentdb.com/images/logo.png" 
        alt="Open Trivia DB" />

      <article>
        EasyTrivia is a fast  
        <span> JavaScript</span> library
        which provides easy usage for the 
        <a href="https://opentdb.com/" 
          target="_blank" 
          rel="noreferrer"> OpenTriviaDataBase API</a> with 
          type definitions. Works with CommonJS, ESModules and 
          TypeScript.
      </article>

      <h3>
        Installation
      </h3>
      <pre><code>
        npm i easy-trivia
      </code></pre>
    </section>
  );
}