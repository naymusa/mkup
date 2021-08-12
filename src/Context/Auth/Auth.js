// import React, { useState } from "react";

// const AuthContext = React.createContext(null);

// const initialValue = {
//   user: undefined,
//   session: {
//     login: false,
//   },
// };

// function Auth(props) {
//   const [user, setNewUser] = useState();
//   return (
//     <AuthContext.Provider value={initialValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// }

// export default Auth;
// export { AuthContext };

import firebase from "firebase/app";
import React, { useState } from "react";

import Swal from 'sweetalert2';

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

import { firebaseConfig } from "../../Constantes";

const AuthContext = React.createContext(null);

const sessionConGoogle = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleAuthProvider);
};

// const sessionConGithub = () => {
//   const githubAuthProvider = new firebase.auth.GithubAuthProvider();
//   firebase.auth().signInWithPopup(githubAuthProvider);
// };

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logout");
    });
};

function Auth(props) {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (productoIndividual) => {
    setCarrito((prevState) => [...prevState, productoIndividual]);
    // alert("Se agregó exitosamente tu producto a tu carrito de compras");
    Swal.fire({
      icon: 'success',
      title: 'Tu deseo ha sido agregado al carrito de compras',
      showConfirmButton: false,
      timer: 1000
    })
  };

  const quitarDeCarrito = (productoEliminado) => {
    console.log(productoEliminado);

    setCarrito((prevState) =>
      prevState.filter(
        (productoIndividual) => productoIndividual._id !== productoEliminado._id
      )
    );
    Swal.fire({
      title: '¿Realmente quieres eliminarlo?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, eliminalo`,
      denyButtonText: `Mejor no`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Producto eliminado', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Tu producto aún quedará en tu carrito', '', 'info')
      }
    })
  };

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <AuthContext.Provider
              value={{
                session: {
                  isSignedIn,
                  user,
                  providerId,
                },
                metodos: {
                  sessionConGoogle,
                  // sessionConGithub,
                  logout,
                },

                carrito: carrito,
                agregarCarrito,
                quitarDeCarrito,
              }}
            >
              {props.children}
            </AuthContext.Provider>
          );
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
}

export default Auth;
export { AuthContext };
