import '../scss/showcase.scss';
import SocialButton from './SocialButton';

export default function Showcase() {
  return (
    <>
      <div id="showcase">
        <h2>
          EasyTrivia is a fast  
          <span> JavaScript</span> library
          which provides easy usage for the 
          <a href="https://opentdb.com/"> OpenTriviaDataBase API</a>,
          a free to use, user-contributed trivia question database.
        </h2>

        <div id="social-links">
          <SocialButton text="Github Repo" backgroundColor="gray" link="https://github.com/Elitezen/easy-trivia/"/>
          <SocialButton text="NPM Page" backgroundColor="red" link="https://www.npmjs.com/package/easy-trivia/"/>
          <SocialButton text="Discord Trivia" backgroundColor="#0095f0" link="https://github.com/Elitezen/discord-trivia"/>
        </div>
      </div>
    </>
  );
}