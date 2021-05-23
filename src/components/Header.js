import React from "react";
import { Link } from "react-router-dom";
import style from "../style/header.module.css";

export default function Header() {
   return (
      <div className={style.header}>
         <Link exact to="/explore">
            <img src="/images/search.png" alt="search" />
         </Link>

         <div className={style.nav_items}>
            <Link exact to="/amigos" >
               <img src="/images/invite.png" alt="invite" />
            </Link>

            <Link exact to="/upcoming" >
               <img src="/images/calendar.png" alt="invite" />
            </Link>

            <Link exact to="/notifications" >
               <img src="/images/noti.png" alt="invite" />
            </Link>

            <Link exact to="/profile" >
               <img src="/images/silvanei.jpeg  " alt="invite" />
            </Link>
         </div>
      </div>
   );
}
