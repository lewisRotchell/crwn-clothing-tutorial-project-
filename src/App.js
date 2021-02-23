import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
