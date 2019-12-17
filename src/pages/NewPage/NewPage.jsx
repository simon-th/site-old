import React from 'react';
import { Link } from 'react-router-dom';
import '../../common/App.css';

const NewPage = () => (
  <div className="App">
    <header className="App-header">
      <p>
        <Link to="/">You have discovered a route (ﾉ^ヮ^)ﾉ*:・ﾟ✧</Link>
      </p>
    </header>
  </div>
);


export default NewPage;
