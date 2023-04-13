import ResponsiveAppBar from "./pages/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import More from "./pages/More";
import Play from "./pages/Play";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
//commit2 temp1
function App() {
  const user = localStorage.getItem("token");
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Games" element={<Games/>} />
        <Route path="/More" element={<More/>} />
        <Route path="/Play" element={<Play/>} />
        
        {/* {user && <Route path="/" exact element={<Main />} />} */}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{/* <Route path="/Home" element={<Navigate replace to="/login" />} /> */}
      </Routes>
    </div>
  );
}

export default App;