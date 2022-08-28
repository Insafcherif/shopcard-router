import './App.css';
import Header from './Components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import List from './Components/List';
import SignIn from './Components/SignIn';
import { useState } from 'react';
import { products } from './data';
import Profil from './Components/Profil';
import DetailsItems from './Components/DetailsItems';
import Shop from './Components/Shop';
import PrivateRoute from "./Components/PrivateRoute";
import NotFoundPage from './Components/NotFoundPage';

function App() {
  const [listOfProducts, setProducts] = useState(products);
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    connect: false,
  });
  const [shoptotal, setShoptotal] = useState({ articles: [], total: 0 })
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      {user.connect && <Shop shoptotal={shoptotal} />}
      <Routes>
        <Route path="/" element={<List listOfProducts={listOfProducts} user={user} />} />
        <Route path="/SignIn" element={<SignIn setUser={setUser} user={user} />} />
        <Route path="/Profil" element={<PrivateRoute user={user}><Profil user={user} /></PrivateRoute>} />
        <Route path="/list/:id" element={<PrivateRoute user={user}><DetailsItems listOfProducts={listOfProducts} shoptotal={shoptotal} setShoptotal={setShoptotal} /></PrivateRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
