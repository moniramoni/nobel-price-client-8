import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NobelPrice from './components/NobelPrize/NobelPrice';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <NobelPrice></NobelPrice>
        <Footer></Footer>

    </div>
  );
}

export default App;
