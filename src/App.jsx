import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/homepage";
import MenuPage from "./menu/menupage";
import UpperMenu from "./components/upper-menu/upper-menu";

function App() {
  return (
    <Router>
      <UpperMenu />
      <Routes>
        <Route path="/coffee_web_react/" element={<HomePage/>} />
        <Route path="/coffee_web_react/menu" element={<MenuPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
