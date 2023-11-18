import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Logo from './components/logo.jsx';
import LoginPage from "./pages/loginpage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={LoginPage} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
