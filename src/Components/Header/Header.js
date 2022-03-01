import ClickableTitle from './ClickableTitle';
import './Header.scss';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header>
      <ClickableTitle 
        new={false}
        text="EasyTrivia" 
        href="#" 
        className="header-title"/>
      <Navigation />
    </header>
  );
}