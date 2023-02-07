import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dish_page from './components/pages/dish_page/dish_page';
import Main_page from './components/pages/main_page/main_page';
import Products_page from './components/pages/products_page/products_page';
import Suggestion_page from './components/pages/suggestion_page/suggestion_page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main_page/>}></Route>
        <Route path='/:id' element={<Dish_page/>}></Route>
        <Route path='/products' element={<Products_page/>}></Route>
        <Route path='/suggestion' element={<Suggestion_page/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
