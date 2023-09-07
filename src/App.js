import './App.css';
import NavBar from './components/Navbar/NavBar';
import HeroImage from './components/Hero/HeroImage';
import TopAlbums from './components/TopAlbum/TopAlbums';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroImage />
      <TopAlbums />
    </div>
  );
}

export default App;
