import logo from "./logo.svg";
import "./App.css";
import Loader from "components/Loader";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "pages/Login";
import CssBaseline from "@material-ui/core/CssBaseline";
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "components/PrivateRoute";
import Trailers from "pages/Trailers";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/trailers" exact>
            <Trailers />
          </PrivateRoute>
          <PrivateRoute path="/trailers/:trlr">trailer</PrivateRoute>
          <Route path="*">
            <Redirect
              to={{
                pathname: "/trailers",
              }}
            />
          </Route>
        </Switch>
      </Router>
      <Loader show={false} />
    </div>
  );
}

export default App;
