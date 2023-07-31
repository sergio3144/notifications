import { v4 as uuidv4 } from 'uuid'
import markWebber from '../../public/avatar-mark-webber.webp'
import angela from '../../public/avatar-angela-gray.webp'
import jacob from '../../public/avatar-jacob-thompson.webp'
import rizky from '../../public/avatar-rizky-hasanuddin.webp'
import kimberly from '../../public/avatar-kimberly-smith.webp'
import anna from '../../public/avatar-anna-kim.webp'

type Persons = {
  image: string,
  name: string,
  description: string
  group?:string,
  date: string,
  id: string
}

export const persons:Persons[] = [
  {image: markWebber, name: 'Mark Webber', description: 'reaccionó a tu publicación reciente', group: '¡Mi primer torneo hoy!', date: 'hace 5 minutos', id: uuidv4()},
  {image: angela, name: 'Angela Gray', description: 'te siguió', date: 'Hace 5 minutos', id: uuidv4()},
  {image: jacob, name: 'Jacob Thompson', description: 'se ha unido a su grupo', date: 'Hace 1 día', id: uuidv4()},
  {image: rizky, name: 'Rizky Hasanuddin', description: 'te envió un mensaje privado', date: 'Hace 5 días', id: uuidv4()},
  {image: kimberly, name: 'Kimberly Smith', description: 'comentó tu foto', date: 'Hace 10 días', id: uuidv4()},
  {image: anna, name: 'Anna Kim', description: 'salió del grupo', group: 'Chess Club', date: 'Hace 1 mes', id: uuidv4()},
]
  