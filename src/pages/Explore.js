import React from "react";
import data from "../data/Explore.json";

import { Input } from "antd";

import style from "../style/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";

import SubHeader from "../components/SubHeader";

export default function Explore() {
   const { people, conversation } = data;

   return (
      <div className={style.exploreContainer}>
         <div className={style.header}>
            <SubHeader
               className={style.subHeader}
               pageTitle="Explore"
            />
            <Input
               style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "0.8rem",
                  padding: "0.3rem 1rem",
                  border: "nome",
                  boxShadow: "none",
               }}
               size="large"
               placeholder="Encontre pessoas no clube black"
               prefix={<img src="/images/search.png" alt="" width="15px" />}
            ></Input>
         </div>

         <h6>Seguir pessoas</h6>

         <div className={style.peopleContainer}>
            {people.map((item) => (
               <div>
                  <div className="d-flex align-items-center">
                     <img src="/images/user-img.jpg" alt="" />
                     <div className={style.peopleDescription}>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                     </div>
                  </div>
                  <button className={style.peopleFollow}>Seguir</button>
               </div>
            ))}

            <button className={style.showMore}>
               <span>Mostrar mais pessoas</span>
               <DownOutlined />
            </button>
         </div>

         <h6>Encontre conversas sobre!</h6>
         <div className="row mx-0">
            {conversation.map((item) => (
               <div className="col-6 px-2 mb-3">
                  <div className={style.conversationCard}>
                     <h6>
                        <FireOutlined />
                        {item.title}
                        {/* {item.description} */}
                     </h6>
                     <p>{item.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
