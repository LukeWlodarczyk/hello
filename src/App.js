import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BeerList from './components/BeerList';
import Random from './components/Random';
 
const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Your favourites</Link>
          </li>
        </ul>

        <Route exact path="/" component={BeerList} />
        <Route path="/random" component={Random} />
      </div>
    </Router>
  </Provider>
)
 
App.propTypes = {
  store: PropTypes.object.isRequired
}
 
export default App
