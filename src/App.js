import Home from "./Home/Home";
import AuthContext from "./Context/Auth/Auth.js";
import Header from "./NavBar/Header/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detalle1 from "./Home/Detalle/Detalle1";
import Login from "./Login/Login";

import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

import { firebaseConfig } from "./Constantes";
import Footer from "./Footer/Footer";
import Carrito from "./Carrito/Carrito";

// function App() {
//   return (
//     <AuthContext>
//       <div className='App'>
//         <Home />
//       </div>
//     </AuthContext>
//   );
// }

function NoMatch() {
  return (
    <div>
      <p>NoMatch</p>
    </div>
  );
}

function App() {
  return (
    <Router>

      <AuthContext>
        <Header />
        <Switch>
         

          <Route exact path="/">
            <Home />
          </Route>

          <Route  path="/detalle-producto/:idProducto">
            <Detalle1 />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/carrito'>
            <Carrito />
          </Route>

          <Route path='*'>
            <NoMatch />
          </Route>

        </Switch>
        <Footer />
      </AuthContext>
    </Router>
  );
}

export default App;
