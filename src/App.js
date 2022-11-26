import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="appContainer">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <ItemListContainer greeting="bienvedido al sitio" />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
