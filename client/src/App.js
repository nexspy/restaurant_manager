import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Foods from './components/Foods/Foods.jsx/Foods';
import FoodCreate from './components/Foods/FoodCreate';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/food" exact component={Foods} />
        <Route path="/food/create" exact component={FoodCreate} />
      </Router>
      
    </div>
  );
}

export default App;
