import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewPage from './pages/NewPage/NewPage';
import './common/App.css';

const App = () => (
  <div>
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home} />
      <Route exact path="/newpage" component={NewPage} />
    </Router>
  </div>
);

export default App;
