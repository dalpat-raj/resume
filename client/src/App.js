import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import './App.scss';
import Home from "./pages/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// import Editor from "./components/Editor";
import MainEditor from "./components/MainEditor";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/resume'} element={<>resume Page</>} />
          <Route path={'/editor/:id'} element={<MainEditor/>} />
          <Route path={'/signup'} element={<SignUp/>} />
          <Route path={'/login'} element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
