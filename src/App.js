import './scss/app.scss';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Showcase from './components/Showcase';
import MainBody from './components/MainBody'

function App() {
  return (
    <>
      <Header />
      <NavMobile />
      <Showcase />
      <MainBody />
    </>
  );
}

export default App;