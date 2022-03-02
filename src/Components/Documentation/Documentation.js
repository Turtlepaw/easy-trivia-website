import './Documentation.scss';
import TableOfContents from './TableOfContents';
import DocumentationCard from './DocumentationCard';

export default function Documentation() {
  return (
    <main id="documentation">
      <h2>
        <a href="#documentation">
          Documentation (Draft)
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

        <DocumentationCard
          id="documentation-functions-getcategorydata"
          title={
            [
              'getOverallQuestionCount(',
              '): Promise<',
              <a href="#documentation-typings-triviacategorydata">
                TriviaCategoryData
              </a>,
              '>'
            ]
          }
          description="Fetches overall question count of the API"
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
      <section id="documentation-typings" className="documentation-section">
        <h3>
          <a href="#documentation-typings">
            Typings
          </a>
        </h3>

        <DocumentationCard
          id="documentation-typings-triviacategoryname"
          title={
            [
              "type TriviaCategoryName = \n| GENERAL_KNOWLEDGE\n| ENTERTAINMENT_BOOKS\n| ENTERTAINMENT_FILM\n| ENTERTAINMENT_MUSIC\n| ENTERTAINMENT_MUSICALS_AND_THEATRES\n| ENTERTAINMENT_TELEVISION\n| ENTERTAINMENT_VIDEO_GAMES\n| ENTERTAINMENT_BOARD_GAMES\n| SCIENCE_AND_NATURE\n| SCIENCE_COMPUTERS\n| SCIENCE_MATHEMATICS\n| MYTHOLOGY\n| SPORTS\n| GEOGRAPHY\n| HISTORY\n| POLITICS\n| ART\n| CELEBRITIES\n| ANIMALS\n| VEHICLES\n| ENTERTAINMENT_COMICS\n| SCIENCE_GADGETS\n| ENTERTAINMENT_JAPANESE_ANIME_AND_MANGA\n| ENTERTAINMENT_CARTOON_AND_ANIMATIONS"
            ]
          }
          description="Names representing a trivia category"
          />

        <DocumentationCard
          id="documentation-typings-triviacategoryresolvable"
          title={
            [
              'type TriviaCategoryResolvable = TriviaCategoryName | `${number}` | number;',
            ]
          }
          description="An argument that can be resolved into a trivia category"
          />

        <DocumentationCard
          id="documentation-typings-triviacategorydata"
          title={
            [
              'interface TriviaCategoryData',
              '\n',
              'id: number',
              '\n',
              'name: ', <a href="#documentation-typings-triviacategoryname">TriviaCategoryName</a>,
              '\n',
              'questionCounts: ', <a href="#documentation-typings-triviacategoryquestiondata">TriviaCategoryQuestionData</a>,
              '\n',
            ]
          }
          description="API data about a trivia category"
          />

        <DocumentationCard
          id="documentation-typings-triviacategoryquestiondata"
          title={
            [
              'interface TriviaCategoryQuestionData',
              '\n',
              'total: number',
              '\n',
              'forEasy: number',
              '\n',
              'forMedium: number',
              '\n',
              'forHard: number'
            ]
          }
          description="A category's question count data"
          />
      </section>
    </main>
  );
}