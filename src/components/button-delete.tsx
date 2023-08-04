import {MouseEventHandler} from "react";

type Prop = {
  resetNotifications: MouseEventHandler<HTMLButtonElement> 
}

const BotonTodoDelete = ({ resetNotifications }:Prop):JSX.Element => {
  return (
    <button className="text-sm font-700" onClick={resetNotifications}>Marcar todos como leídos</button>
  )
}

export { BotonTodoDelete }