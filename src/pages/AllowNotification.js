import React from "react";
import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

export default function AllowNotification() {
   return (
      <div className={style.phoneConfirmationContainer}>
         <div className="text-center">
            <h1 className="mb-4">Estamos no último e importante passo!</h1>
            <h1 className="mb-3">
               Ative as notificações para saber quando as pessoas estão falando
               com você!
            </h1>
            <div className={style.notificationContainer}>
               <div className="p-3">
                  <h3>
                     <span>"Club Black"</span> gostaria de enviar notificações
                     para você
                  </h3>
                  <p>As notificações podem incluir alertas, sons e ícones.</p>
               </div>

               <div className={style.action_btn}>
                  <Link exact to="/home">
                     Não permitir
                  </Link>
                  <Link exact to="/home">
                     Permitir
                  </Link>
                  <img
                     src="/images/handIcon.svg"
                     alt="handIcon"
                     className={style.hand_icon}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
