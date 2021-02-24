import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/SignInAndSignUp";
import { auth } from "./firebase/firebaseUtils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });
    //when onauthstatechanged is called it calls an unsubscribe function
    return () => unsubscribeFromAuth();
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/signin" component={SignInAndSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
