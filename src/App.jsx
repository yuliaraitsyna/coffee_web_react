import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/homepage";
import MenuPage from "./menupage/menupage";
import UpperMenu from "./components/upper-menu/upper-menu";
import Footer from "./components/footer/footer";
import ErrorPage from "./errorpage/errorpage";

function App() {
  return (
    <Router>
      <UpperMenu />
      <Routes>
        <Route path="/coffee_web_react/" element={<HomePage/>} errorElement={<ErrorPage/>}/>
        <Route path="/coffee_web_react/menu" element={<MenuPage/>} errorElement={<ErrorPage/>}></Route>
        <Route path="/coffe_web_react/about" element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
