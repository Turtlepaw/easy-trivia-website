import './TableOfContents.scss';

export default function TableOfContents() {
  return (
    <div id="documentation-tableofcontents">
      <h2>
        Table of Contents
      </h2>
      <ul>
        <li>
          <a href="#documentation-functions">
            Functions
          </a>
          <ul>
            <li>
            <a href="#documentation-functions-getquestions">
              getQuestions()
            </a>
            </li>
            <li>
              <a href="#documentation-functions-getcategorydata">
                getCategoryData()
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#documentation-classes">
            Classes
          </a>
          <ul>
            <li>
              <a href="#documentation-classes-categories">
                Categories
              </a>
            </li>
            <li>
              <a href="#documentation-classes-triviasession">
                TriviaSession
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#documentation-typings">
            Typings
          </a>
          <ul>
            <li>
              <a href="#documentation-typings-triviacategoryname">
                TriviaCategoryName
              </a>
            </li>
            <li>
              <a href="#documentation-typings-triviacategoryresolvable">
                TriviaCategoryResolvable
              </a>
            </li>
            <li>
              <a href="#documentation-typings-triviacategorydata">
                TriviaCategoryData
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}