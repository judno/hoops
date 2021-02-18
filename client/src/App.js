import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
