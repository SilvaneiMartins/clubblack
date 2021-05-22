import React, { useState } from "react";

import style from "../../style/bottomSheet.module.css";
import { FcGlobe } from "react-icons/fc";

export default function StartRoom(props) {
   const [room, setRoom] = useState("open");

   return (
      <>
         <div className={style.switch_Line}></div>

         <div className={style.addTopic}>
            <button className={style.addTopicBtn}>+ Adicionar topico</button>
         </div>

         <div className={style.selectRoom}>
            <button
               className={room === "open" ? style.active : ""}
               onClick={() => setRoom("open")}
            >
               <div>
                  <FcGlobe />
               </div>
               Abrir
            </button>

            <button
               className={room === "social" ? style.active : ""}
               onClick={() => setRoom("social")}
            >
               <div>
                  <FcGlobe />
               </div>
               Social
            </button>

            <button
               className={room === "closed" ? style.active : ""}
               onClick={() => setRoom("closed")}
            >
               <div>
                  <FcGlobe />
               </div>
               Escolher
            </button>
         </div>

         <p>
            Iniciar sala{" "}
            <span>
               {room === "closed"
                  ? "com pessoas que escolher!"
                  : room === "social"
                  ? "com pessoas que sigo!"
                  : "- abrir todas salas!"}
            </span>
         </p>

         <div className="text-center">
            <button
               className={style.letGoBtn}
               onClick={() => {
                  props.setSheetCreateRoom(true);
                  props.setSheetVisible(true);
               }}
            >
               🎉 Iniciar Sala
            </button>
         </div>
      </>
   );
}
