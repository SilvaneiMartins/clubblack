import React from 'react'

import SubHeader from "../components/SubHeader"
import style from "../style/upcoming.module.css"

export default function Upcoming() {
   return (
      <div className={style.upcomingContainer}>
          <SubHeader
               className={style.subHeader}
               pageTitle="Upcoming"
            />
      </div>
   )
}
