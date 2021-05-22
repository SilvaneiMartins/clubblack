import React, { useState } from "react";
import { Link } from "react-router-dom";

import PhoneInput from "react-phone-number-input";
import style from "../style/PhoneConfirmation.module.css";

export default function PhoneConfirmation() {
   const [value, setValue] = useState();

   return (
      <div className={style.phoneConfirmationContainer}>
         <Link exact to="/" className={style.backBtn}>
            <img src="/images/arrow.png" alt="Voltar" />
         </Link>
         <h1>Digite seu nº telefone</h1>
         <PhoneInput
            international
            defaultCountry="BR"
            value={value}
            onChange={setValue}
         />
         <p>
            Ao inserir seu número, você concorda com nossos{" "}
            <span>termos de serviço e política de privacidade.</span>
            Obrigado!
         </p>
         <Link
            exact
            to="/code_confirm"
            className="primaryBtn d-flex align-items-center mb-3"
         >
            Proximo{" "}
            <img
               src="/images/nextArrowIcon.svg"
               className="ml-1"
               alt="Proximo"
            />
         </Link>
      </div>
   );
}
