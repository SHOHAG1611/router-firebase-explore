import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import Loging from './components/Loging/Loging'
import Registar from './components/Registar/Registar'
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Loging></Loging>}></Route>
        <Route path='/register' element={<Registar></Registar>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={
        <RequireAuth>
          <Orders></Orders>
        </RequireAuth>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
