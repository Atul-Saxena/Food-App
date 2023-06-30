import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
// import Weather from './components/weather';
import Sandwiches from './food-item/sandwiches';
import BBQ from './food-item/bbq';
import Chicken from './food-item/chicken';
import Sausages from './food-item/sausages';
import Pizzas from './food-item/pizza';
import Burger from './food-item/burger';
import IceCream from './food-item/icecream';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sandwiches' element={<Sandwiches/>}/>
          <Route path='/bbqs' element={<BBQ/>}/>
          <Route path='/chicken' element={<Chicken/>}/>
          <Route path='/sausages' element={<Sausages/>}/>
          <Route path='/pizzas' element={<Pizzas/>}/>
          <Route path='/burgers' element={<Burger/>}/>
          <Route path='/ice-cream' element={<IceCream/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
