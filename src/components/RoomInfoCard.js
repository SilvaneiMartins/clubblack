import React from "react";

import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import style from "../style/roomCard.module.css";
import data from "../data/roomCard.json";

export default function RoomInfoCard() {
   return (
      <>
         {data.map((item) => (
            <div>
               <div>
                  <div className={style.roomCardContainer}>
                     <h6>{item.title}</h6>
                     <h2>{item.sub_title}</h2>

                     <div className={style.roomMenbers}>
                        <div>
                           <img src="/images/silvanei.jpeg" alt="silvanei" />
                           <img src="/images/silvanei.png" alt="silvanei" />
                        </div>
                        <div>
                           {item.members.map((person) => (
                              <p>
                                 {person.first_name} {person.last_name}{" "}
                                 <BsChatDots />
                              </p>
                           ))}
                           <p className="d-flex align-items-center">
                              <span className="mr-2">1.8</span>
                              <BsFillPersonFill />
                              <span className="mx-2">/</span>{" "}
                              <span className="mr-2">10</span>{" "}
                              <BsChatDotsFill />
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
}
