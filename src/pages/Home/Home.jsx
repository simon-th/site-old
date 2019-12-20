import React from 'react';
import { Link } from 'react-router-dom';
import '../../common/App.css';

const Home = () => (
  <div className="page">
    <header className="App-header">
      <p>
        <Link to="/newpage">Work in progress (/^▽^)/</Link>
      </p>
    </header>
  </div>
);


export default Home;
