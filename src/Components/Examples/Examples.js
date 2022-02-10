import './Examples.scss';
import SyntaxHighligher from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import codeSnippets from '../../codeSnippets';

export default function Examples() {
  return (
    <section id="examples">
      <div id="example1">
        <div className="code">
          <h1>
            Example Code
          </h1>
          <SyntaxHighligher language="javascript" style={nightOwl}>
            {codeSnippets.example_1.code}
          </SyntaxHighligher>
        </div>
        <div className="result">
          <h1>
            Example Result
          </h1>

          <SyntaxHighligher language="javascript" style={nightOwl}>
            {codeSnippets.example_1.result}
          </SyntaxHighligher>
        </div>
      </div>
    </section>
  );  
}