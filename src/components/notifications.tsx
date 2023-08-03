import { Notifications } from "./numberNotifications";
import { BotonTodoDelete } from "./button-delete";
import { persons } from "./persons"
import './sass/notificationsList.scss'
import { GoDotFill } from 'react-icons/go'

const NotificationsList = ():JSX.Element => {

  

  const filterNotificationDesactived = (id:string) => {
    const filterMessage = persons.filter((person) => person.id === id 
      ? console.log(true)
      : console.log(false)
    )

    return filterMessage
  }


  return (
    <>
      <header className="main-header">
        <Notifications numberNotifications={persons.length}/>
        <BotonTodoDelete/>
      </header>
      <div className="notifications">
        <>
          {persons.map((person, index) => (
            <>
            <div>
              <div className='information'  onClick={() => filterNotificationDesactived(person.id)}>
                <div className="information__flex">
                  <img key={index} className="information__flex-image" src={person.image} alt={person.image} />
                  <div>
                    <p key={person.description} className="information__flex-description"><span className="font-extrabold" key={person.name}> { person.name } </span>{ person.description } <span key={person.group} className="font-extrabold text-blue-500">{ person.group }</span></p>
                    
                    <span className="opacity-70 text-sm flex items-center gap-2" key={person.date}>{person.date} <GoDotFill color='#EA906C'/></span>
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