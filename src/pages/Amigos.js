import React from "react";

import SubHeader from '../components/SubHeader'

import style from "../style/amigos.module.css";

export default function Amigos() {
   return (
      <div className={style.amigosContainer}>
         <SubHeader className={style.subHeader} pageTitle="Convidar Amigos" />
      </div>
   );
}
