import "./App.css";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Shows from "./pages/Shows";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/shows" component={Shows} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
  );
}

export default App;
