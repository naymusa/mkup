import React, { useContext } from "react";

import { AuthContext } from "../Context/Auth/Auth.js";
import "./Login.css";


function Login() {
  const { metodos } = useContext(AuthContext);

  return (
    <div className="wrap-login">

      <img alt="login-mkup" className="wrap-login-banner" src="https://i.pinimg.com/originals/f8/cb/cf/f8cbcfec2b3a31420bc217058a3486ff.jpg" />
      
      <section className="wrap-login-registro">
      <h2>Inicia sesion</h2>
      <button className="login-page-boton" onClick={metodos.sessionConGoogle}>Google</button>
      {/* <button onClick={metodos.sessionConGithub}>github</button> Esta sesión se sacó de firebase*/}
      </section>
    </div>
  );
}

export default Login;
