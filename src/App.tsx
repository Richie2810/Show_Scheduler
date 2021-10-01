import "./App.css";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Shows from "./pages/Shows";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/shows" component={Shows} />
    </Switch>
  );
}

export default App;
