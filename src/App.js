import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import Dashboard from './profile/Dashboard';
import ViewItems from './profile/ViewItems';
import Header from './header/Header';
// import PrivateRouter from './components/utils/PrivateRoutes'
function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
          <Route path='/' element={<Login/>}/> 
          {/* <Route path="/signin" element={<Signin/> }/> */}
          <Route path='/Dashboard' element={<Dashboard/>}/> 
          <Route path='/ViewItems' element={<ViewItems/>}/> 
       </Routes>
    </div>
  );
}

export default App;
