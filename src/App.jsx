import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./homepage/homepage";
import MenuPage from "./menupage/menupage";
import UpperMenu from "./components/upper-menu/upper-menu";
import Footer from "./components/footer/footer";
import GeneratorPage from "./generatorpage/generatorpage";
import { AuthProvider } from "./loginpage/login-module";
import LoginPage from "./loginpage/loginpage";

function App() {
  const location = useLocation();
  console.log(location);
  const showFooterAndHeader = location.pathname !== "/coffee_web_react/login"
  
  return (
    <>
      {showFooterAndHeader && <UpperMenu />}
        <Routes>
          <Route path="/coffee_web_react/" element={<HomePage/>} />
          <Route path="/coffee_web_react/menu" element={<MenuPage />} />
          <Route path="/coffee_web_react/about" element={<></>}/>
          <Route path="/coffee_web_react/generator" element={<GeneratorPage />} />
          <Route path="/coffee_web_react/login" element={<AuthProvider><LoginPage/></AuthProvider>} />
        </Routes>
      {showFooterAndHeader && <Footer/>}
     </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
