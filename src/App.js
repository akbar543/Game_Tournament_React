import ResponsiveAppBar from "./pages/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import More from "./pages/More";
import Play from "./pages/Play";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userActions } from "./store";
// import { useSelector } from 'react-redux'
// import { selectUser } from './features/userSlice'
//commit2 temp007
function App() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  console.log(user);

  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(userActions.login());
    }
  },[localStorage]);
  // const user = useSelector(selectUser)
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
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