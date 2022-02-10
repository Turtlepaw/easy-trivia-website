import './Navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#documentation">
            <button>
              Documentation
            </button>
          </a>
        </li>

        <li>
          <a href="https://github.com/Elitezen/easy-trivia"
            target="_blank"
            rel="noreferrer">
            <button>
              GitHub
            </button>
          </a>
        </li>

        <li>
          <a href="https://www.npmjs.com/package/easy-trivia"
            target="_blank"
            rel="noreferrer">
            <button>
              NPM
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}