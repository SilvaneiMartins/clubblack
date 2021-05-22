import React from "react";
import { Link } from "react-router-dom";

import style from "../style/Welcome.module.css";

export default function Welcome() {
   return (
      <div className={style.WelcomeContainer}>
         <h1>Welcome!</h1>

         <div className={style.WelcomeInfo}>
            <p>
               Estamos trabalhando muito para que o Club Black seja para todos!
               Enquanto finalizamos o nosso app, estamos adicionando pessoas
               gradualmente para garantir que não aconteça algum erro.
            </p>
            <p>
               Qualquer pessoa pode participar com um convite de um usuário
               existente - ou reverter seu nome de usuário que enviaremos uma
               mensagem de texto se você tiver um amigo no aplicativo que pode
               convidar para entrar. Estamos muito gratos por você estar aqui e
               mal podemos esperar para liberar o aplicativo para todos.
            </p>
            <p>Silvanei Martins, e o time Clube Black</p>
         </div>
         <div className={style.actionBtn}>
            <Link
               exact
               to="/invite"
               className="primaryBtn d-flex align-items-center mb-3"
            >
               Seu nome de usuário{" "}
               {/* <img src="" alt="" /> */}
            </Link>
            <Link to="" >Caso você tenha um convite? Entrar</Link>
         </div>
      </div>
   );
}
