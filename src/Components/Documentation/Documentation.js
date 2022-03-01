import './Documentation.scss';
import TableOfContents from './TableOfContents';
import DocumentationCard from './DocumentationCard';

export default function Documentation() {
  return (
    <main id="documentation">
      <h2>
        <a href="#documentation">
          Documentation (So Far)
        </a>
      </h2>

      <TableOfContents />

      <section id="documentation-functions" className="documentation-section">
        <h3>
          <a href="#documentation-functions">
            Functions
          </a>
        </h3>

        <DocumentationCard
          id="documentation-functions-getquestions"
          title={
            [
              'getQuestions(options:',
              <a href="#documentation-typings-questionoptions">
                QuestionOptions
              </a>,
              '): Promise<',
              <a href="#documentation-typings-triviaquestion">
                TriviaQuestion[]
              </a>,
              '>'
            ]
          }
          description="Fetches questions according to the given options."
          /> 

          {"Swap for getQuestionCount"}
        <DocumentationCard
          id="documentation-functions-getcategorydata"
          title={
            [
              'getCategoryData(arg:',
              <a href="#documentation-typings-triviacategoryresolvable">
                TriviaCategoryResolvable
              </a>,
              '): Promise<',
              <a href="#documentation-typings-triviacategorydata">
                TriviaCategoryData
              </a>,
              '>'
            ]
          }
          description="Fetches a trivia category's data."
          /> 
      </section>
      <section id="documentation-classes" className="documentation-section">
        <h3>
          <a href="#documentation-classes">
            Classes
          </a>
        </h3>

        <h3 id="documentation-classes-categories">
          <a href="#documentation-classes-categories">
            Categories
          </a>
        </h3>

        <p>
          Class for trivia category related data retrieving.
        </p>

        <DocumentationCard
          id="documentation-classes-allnames"
          title=".allNames"
          description="All category names in a string array"
          />

        <DocumentationCard
          title={
            [
              '.categoryByName(arg:',
              <a href="#documentation-typings-triviacategoryname">
                TriviaCategoryName
              </a>,
              '): number | undefined'
            ]
          }
          description="Returns the resolved value of the given category name if valid."
          /> 

        <DocumentationCard
          title={
            [
              '.categoryByName(arg: ',
              'number | `${number}`',
              '):', 
              <a href="#documentation-typings-triviacategoryname">
                TriviaCategoryName
              </a>, ' | undefined'
            ]
          }
          description="Returns the resolved value of the given category name if valid."
          /> 

        <DocumentationCard
          id="documentation-classes-categories-getcategorydata"
          title={
            [
              '.getCategoryData(arg:',
              <a href="#documentation-typings-triviacategoryresolvable">
                TriviaCategoryResolvable
              </a>,
              '): Promise<',
              <a href="#documentation-typings-triviacategorydata">
                TriviaCategoryData
              </a>,
              '>'
            ]
          }
          description="Fetches a trivia category's data."
          />

        <DocumentationCard
          id="documentation-classes-categories-iscategoryresolvable"
          title={
            [
              '.isCategoryResolvable(arg: unknown): boolean'
            ]
          }
          description="Checks whether the given argument can be resolved into a trivia category."
          />

        <DocumentationCard
          id="documentation-classes-categories-random"
          title={
            [
              '.random(): number'
            ]
          }
          description="Chooses a random category and returns it's id."
          />

        <h3 id="documentation-classes-triviasession">
          <a href="#documentation-classes-triviasession">
            TriviaSession
          </a>
        </h3>

        <p>
          Class for starting OpenTDB API sessions
        </p>

        <DocumentationCard
          id="documentation-classes-triviasession-token"
          title={
            [
              '.token'
            ]
          }
          description="This sessions current token, null if none"
          />

        <DocumentationCard
          id="documentation-classes-triviasession-start"
          title={
            [
              '.start(): Promise<string>',
            ]
          }
          description="Starts a new trivia session and assigns the new token to TriviaSession#token."
          />

        <DocumentationCard
          id="documentation-classes-triviasession-reset"
          title={
            [
              '.reset(): Promise<TriviaSessionToken>',
            ]
          }
          description="Resets the current trivia session."
          />

        <DocumentationCard
          id="documentation-classes-triviasession-end"
          title={
            [
              '.end(): void;',
            ]
          }
          description="Sets TriviaSession#token to null"
          />
      </section>
    </main>
  );
}