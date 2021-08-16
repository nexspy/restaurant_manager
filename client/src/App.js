import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import FoodCreate from './components/Foods/FoodCreate';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/food/create" exact component={FoodCreate} />
      </Router>
    </div>
  );
}

export default App;
