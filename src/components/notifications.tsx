import { Notifications } from "./numberNotifications";
import { BotonTodoDelete } from "./button-delete";
import { persons } from "./persons"
import './sass/notificationsList.scss'
import { GoDotFill } from 'react-icons/go'
import { MouseEventHandler, useState } from "react";

const NotificationsList = ():JSX.Element => {

  const [selectedPersons, setSelectedPersons] = useState<string[]>([])
  const [notificationLength, setNotificationLength] = useState<number>(persons.length)
  

  const filterNotificationDesactived = (id:string) => {
    setSelectedPersons((prevSelected) => 
      prevSelected.includes(id) ? prevSelected.filter((personId) => personId !== id) : [...prevSelected, id]
    )
    setNotificationLength(notificationLength - 1)
    if(notificationLength === 0) {
      alert('Todas las notifiaciones leídas')
      window.location.reload()
      setNotificationLength(0)
    } else if (selectedPersons.includes(id)) {
      setNotificationLength(notificationLength + 1)
    }
  }

  const resetNotificationsMode: MouseEventHandler<HTMLButtonElement> = () => {
    setNotificationLength(0)
    const allPersonsIds = persons.map((person) => person.id);
    setSelectedPersons(allPersonsIds)
  }


  return (
    <>
      <header className="main-header">
        <Notifications numberNotifications={notificationLength}/>
        <BotonTodoDelete resetNotifications={resetNotificationsMode}/>
      </header>
      <div className="notifications">
        <>
          {persons.map((person, index) => (
            <>
            <div>
              <div className={selectedPersons.includes(person.id) ? 'initial information' : 'information'}  onClick={() => filterNotificationDesactived(person.id)}>
                <div className="information__flex">
                  <img key={index} className="information__flex-image" src={person.image} alt={person.image} />
                  <div>
                    <p key={person.description} className="information__flex-description"><span className="font-extrabold" key={person.name}> { person.name } </span>{ person.description } <span key={person.group} className="font-extrabold text-blue-500">{ person.group }</span></p>
                    
                    <span className="opacity-70 text-sm flex items-center gap-2" key={person.date}>{person.date} {selectedPersons.includes(person.id) ? <GoDotFill color='white'/> : <GoDotFill color='#EA906C'/>}</span>
                  </div>
                </div>
              </div>
            </div>
            </>
          ))}
        </>
      </div>
    </>

  )
}

export { NotificationsList }