import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AddHoop } from "./AddHoop";
import { Header } from "./Header";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/add">
          <AddHoop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
