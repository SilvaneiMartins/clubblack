import React from "react";
import style from "../style/PhoneConfirmation.module.css";
import { Link } from "react-router-dom";

export default function CodeConfirm() {
   return (
      <div className={style.phoneConfirmationContainer}>
         <Link exact to="/invite" className={style.backBtn}>
            <img src="/images/arrow.png" alt="Voltar" />
         </Link>
         <div className="text-center">
            <h1
               style={{ width: "100%", maxWith: "200px", marginBottom: "1rem" }}
            >
               Digite o código que acabamos de enviar por mensagem de texto para
               seu número de telefone.
            </h1>
            <input
               type="text"
               style={{
                  width: "100%",
                  border: "none",
                  textAlign: "center",
                  outline: "none",
               }}
            />
            <p className="mt-2">
               Não recebeu o código? <span>toque para reenviar</span>
            </p>
         </div>
         <Link
            exact
            to="/allow_notification"
            className="primaryBtn d-flex align-items-center mb-3"
         >
            Proximo
            <img src="/images/nextArrowIcon.svg" alt="Proximo" />
         </Link>
      </div>
   );
}
