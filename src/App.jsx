import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/homepage";
import MenuPage from "./menupage/menupage";
import UpperMenu from "./components/upper-menu/upper-menu";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <UpperMenu />
      <Routes>
        <Route path="/coffee_web_react/" element={<HomePage/>} />
        <Route path="/coffee_web_react/menu" element={<MenuPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
