// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Link Files
import Footer from './components/header-footer/Footer';
import Header from './components/header-footer/Header';
import Home from './components/home/Home';

// Styles
import './main.scss';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route
          path="/"
          render={(props) => props.location.pathname !== '/' && <Header />}
        />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Routes />, document.getElementById('root'));
