import Codeblock from '../Codeblock/Codeblock';
import './Examples.scss';
import example1Code from '../../Assets/example1_code.png';
import example1Result from '../../Assets/example1_result.png';

export default function Examples() {
  return (
    <div id="examples">
      <h1>
        Example Usage
      </h1>

      <div className="row">
        <Codeblock title="Code" src={example1Code} alt="Example 1 Code" />
        <Codeblock title="Result" src={example1Result} alt="Example 1 Result" />
      </div>
    </div>
  );  
}