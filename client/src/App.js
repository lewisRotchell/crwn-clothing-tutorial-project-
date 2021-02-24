import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
    //when onauthstatechanged is called it calls an unsubscribe function
    return () => unsubscribeFromAuth();
  }, []);
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
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
