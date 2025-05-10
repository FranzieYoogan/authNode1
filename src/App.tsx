import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

function App() {

  return (
    <>
      <Router>
      <Header></Header>

    <Routes>

    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/Signup" element={<Signup></Signup>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>

    </Routes>

        </Router>
    </>
  )
}

export default App
