import React from 'react'

import SubHeader from "../components/SubHeader"

import style from "../style/notification.module.css"

export default function Notifications() {
   return (
      <div className={style.notificationContainer}>
         <SubHeader
               className={style.subHeader}
               pageTitle="Notifications"
            />
      </div>
   )
}
