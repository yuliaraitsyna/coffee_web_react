import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/homepage";
import MenuPage from "./menupage/menupage";
import UpperMenu from "./components/upper-menu/upper-menu";
import Footer from "./components/footer/footer";
import ErrorBoundary from "./errorboundary/errorboundary";
import GeneratorPage from "./generatorpage/generatorpage";

function App() {
  return (
    <Router>
      <UpperMenu />
      <Routes>
        <Route path="/coffee_web_react/" element={<HomePage/>} errorElement={<ErrorBoundary/>}/>
        <Route path="/coffee_web_react/menu" element={<MenuPage/>} errorElement={<ErrorBoundary/>}></Route>
        <Route path="/coffee_web_react/about" element={<ErrorBoundary/>}></Route>
        <Route path="/coffee_web_react/generator" element={<GeneratorPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
