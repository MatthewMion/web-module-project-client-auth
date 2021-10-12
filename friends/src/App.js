import "./App.css";
import { Login } from "./components/Login";
import Logout from "./components/Logout";
import FriendForm from "./components/FriendForm";
import { FriendsList } from "./components/FriendsList";
import { PrivateRoute } from "./components/PrivateRoute";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/friendslist">Friends List</Link>
        <Link to="/friendsform">Add a Friend</Link>
      </nav>

      <Switch>
        <PrivateRoute exact path="/friendslist" component={FriendsList} />
        <PrivateRoute path="/friendsform" component={FriendForm} />
        <PrivateRoute path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
