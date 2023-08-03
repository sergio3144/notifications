import { persons } from "./persons"
import './sass/notificationsList.scss'

const NotificationsList = ():JSX.Element => {

  return (
    
    <div className="notifications">
      <>
        {persons.map((person, index) => (
          <>
            <div className="information">
              <div className="information__flex">
                <img className="information__flex-image" src={person.image} alt={person.image} />
                <div>
                  <p className="information__flex-description"><span className="font-extrabold"> { person.name } </span>{ person.description } <span className="font-extrabold text-blue-500">{ person.group }</span></p>
                  <span>{person.date}</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    </div>

  )
}

export { NotificationsList }