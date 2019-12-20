import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Home from './pages/Home/Home';
import NewPage from './pages/NewPage/NewPage';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar fixed="top" id="custom-nav" expand="md">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand id="custom-brand" href="/">Simon Hoque</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="wide-button">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="wide-button">
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem className="wide-button">
              <NavLink href="/work">Work</NavLink>
            </NavItem>
            <NavItem className="wide-button">
              <NavLink href="/photo">Photo</NavLink>
            </NavItem>
            <NavItem className="wide-button">
              <NavLink href="/music">Music</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
        <Route exact path="/newpage" component={NewPage} />
      </Router>
    </div>
  );
};

export default App;
