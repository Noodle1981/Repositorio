import "./App.css";
import {BrowserRouter as Router, Route, Swicht} from 'react-router-dom'
import LoginForm from "./components/Loginform/Loginform";
import Dashboard from "./components/Dashboard/Dashboard";
import {useAuth} from "./components/Auth/Auth";

const App = () => {
  const { isAuthenticated } = useAuth(); // Obténer el estado de autenticación

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        {isAuthenticated ? (
          <Route path="/dashboard" component={Dashboard} />
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
};

export default App;
