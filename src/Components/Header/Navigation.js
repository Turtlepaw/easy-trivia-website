import NavLink from "./NavLink";
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <NavLink url="#documentation" text="Documentation" new={false}/>
        <NavLink url="https://github.com/Elitezen/easy-trivia" text="GitHub" new={true} />
        <NavLink url="https://www.npmjs.com/package/easy-trivia" text="NPM" new={true} />
      </ul>
    </nav>
  );
}