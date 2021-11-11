import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/public/Home';
import Login from './pages/public/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
