import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import Home from '../components';
import Sign from './sign';
import Details from './details';

let store = createStore(reducers);

class AppRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/sign" component={Sign}/>
            <Route path="/details**" component={Details} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppRouter;