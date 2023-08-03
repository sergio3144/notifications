// import React from "react";
import './sass/numberNotifications.scss'

type Props = {
  numberNotifications: number
}

const Notifications = ({ numberNotifications }:Props):JSX.Element => {

  return (
    <>
      <h1 className="title">Notificaciones <span>{ numberNotifications }</span></h1>
    </>
  )
}

export { Notifications }