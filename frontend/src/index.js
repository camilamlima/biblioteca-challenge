import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch } from 'react-router-dom'
import { history } from './helpers';
import {AdminPage, HomePage, ReviewPage, NotFound} from './pages';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    
    render() {
        return (
          <Router history={history}>
            <Switch>
              
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/admin' component={AdminPage}/>
              <Route exact path='/review' component={ReviewPage}/>

              <Route component={NotFound}/>
            </Switch>
          </Router>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
