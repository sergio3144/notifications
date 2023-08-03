import { NotificationsList } from "./components/notifications"
import './components/sass/principal.scss'

export const PrincipalAplication = () => {
  return (
    <>
      <div className="main">
        <NotificationsList/>
      </div>
    </>
  )
}