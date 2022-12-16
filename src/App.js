import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <header className="header">
          <NavBar />
        </header>
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"bienvenido al sitio"} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting={"bienvenido al sitio"} />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
