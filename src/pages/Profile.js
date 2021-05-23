import React from "react";
import { Link } from "react-router-dom";

import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";

import { BsAt, BsUpload, BsPlus } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

export default function Profile() {
   return (
      <>
         <div className={style.profileContainer}>
            <div className={exploreStyle.header}>
               <div className={`${exploreStyle.head} || ${style.profileLink}`}>
                  <Link to="/home">
                     <img
                        src="/images/arrow.png"
                        alt="arrow"
                        className={exploreStyle.arrow_icon}
                     />
                  </Link>
                  <div className={style.actionBtn}>
                     <BsAt />
                     <BsUpload />
                     <AiOutlineSetting />
                  </div>
               </div>
            </div>

            <img
               src="/images/silvanei.jpeg"
               alt="Silvanei"
               className={style.profileImg}
            />
            <h4>Silvanei Martins</h4>
            <p>@silvaneimartins</p>

            <div className={style.follow}>
               <p>
                  <span>12</span> Seguidores
               </p>
               <p>
                  <span>72</span> Seguidos
               </p>
            </div>
            <button>Adicionar Bio</button>
            <div className="mb-4">
               <button className="mb-0">
                  <AiOutlineTwitter /> Adocionar Twitter
               </button>
               <button className="mb-0">
                  <AiOutlineInstagram /> Adocionar Instagram
               </button>
            </div>

            <div className={style.nominated}>
               <img src="/images/silvanei.png" alt="silvanei" />
               <div>
                  <p>Postado em 21-05-2021</p>
                  <p>
                     Indicado por <span>Silvio Martins</span>
                  </p>
               </div>
            </div>

            <p>Membro de</p>
            <button className={style.addMemberBtn}>
               <BsPlus />
            </button>
         </div>
      </>
   );
}
