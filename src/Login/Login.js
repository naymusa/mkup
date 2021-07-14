import React, { useContext } from "react";

import { AuthContext } from "../Context/Auth/Auth.js";
import "./Login.css"


function Login() {
  const { metodos } = useContext(AuthContext);

  return (
    <div className="wrap-login">

      <img alt="login-mkup"className="wrap-login-banner" src="https://i.pinimg.com/564x/1b/ac/d0/1bacd04347527e41808ba3ead27c8421.jpg"></img>
      
      <section className="wrap-login-registro">
      <h2>Inicia sesion</h2>
      <button onClick={metodos.sessionConGoogle}>google</button>
      {/* <button onClick={metodos.sessionConGithub}>github</button> */}
      </section>
    </div>
  );
}

export default Login;
