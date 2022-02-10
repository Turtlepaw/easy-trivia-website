import './App.scss';
import Header from './Components/Header/Header';
import Showcase from './Components/Showcase/Showcase';
import Examples from './Components/Examples/Examples';
import Documentation from './Components/Documentation/Documentation'

export default function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Examples />
      <Documentation />
    </>
  );
}