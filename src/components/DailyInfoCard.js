import React from "react";

import data from "../data/dailyCard.json";
import style from "../style/dailyInfoCard.module.css";

export default function DailyInfoCard() {
   return (
      <div className={style.dailyCard}>
         {data.map((item) => (
            <div>
               <span className="">{item.time}</span>
               <div>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
               </div>
            </div>
         ))}
      </div>
   );
}
