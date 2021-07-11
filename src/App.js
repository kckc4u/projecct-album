import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Todo from './pages/todo/todo.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">

        <div className="header">
          <div className="header-content">
            <div className="brand-logo">VV</div>
            <div className="navbar">
              <button>Home</button>
              <button>About Me</button>
              <button>Sign in</button>
            </div>
          </div>
        </div>

        <div className="main">
          <Switch>
            <Route path="/" component={Todo} />
          </Switch>
        </div>

        <div className="footer">
            <div className="footer-content">
            &copy; 2020-21
            </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
