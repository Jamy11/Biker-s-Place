import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import AuthProvider from './context/AuthProvider';
import Register from './pages/public/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './pages/private/Dashboard';
import Purchase from './pages/private/Purchase';
import Explore from './pages/public/Explore';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/purchase">
              <Purchase />
            </PrivateRoute>

          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
