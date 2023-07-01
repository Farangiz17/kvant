import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/home.page';
import Category from './pages/category/category.page';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Product from './pages/product/product';
import AboutUs from './pages/about-us/about-us';
import Service from './pages/service/service';
import ContactUs from './pages/contact-us/contact-us';
import BlankPage from './pages/blank-page/blank-page';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Favorite from './components/header/header-action/favorite';
import { Provider } from 'react-redux';
import store from './store/card'
import KorzinaPage from './pages/korzina/korzinaPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<BrowserRouter>
 <Routes>
  <Route path='/' element={ <App />} >
  <Route index element={<HomePage/>} />
  <Route path='/category/:id' element={<Category/>} />
  <Route path='/product/:id' element={<Product/>} />
  <Route path='/page/about-us' element={<AboutUs/>} />
  <Route path='/page/service' element={<Service/>} />
  <Route path='/page/contact-us' element={<ContactUs/>} />
  <Route path='/page/blank' element={<BlankPage/>}/>
  <Route path='/accaunt/login' element={<Login/>} />
  <Route path='/accaunt/register' element={<Register/>} />
  <Route path='/account/wishlist' element={<Favorite/>} />
  <Route path='/store' element={<KorzinaPage/>} />
  </Route>
 </Routes>
 </BrowserRouter>
</Provider>
);

