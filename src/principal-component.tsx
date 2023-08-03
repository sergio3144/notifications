import { BotonTodoDelete } from "./components/button-delete"
import { NotificationsList } from "./components/notifications"
import { Notifications } from "./components/numberNotifications"
import './components/sass/principal.scss'

export const PrincipalAplication = () => {
  return (
    <>
      <div className="main">
        <header className="main-header">
          <Notifications/>
          <BotonTodoDelete/>
        </header>
        <NotificationsList/>
      </div>
    </>
  )
}