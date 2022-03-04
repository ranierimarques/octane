import { ref, push } from 'firebase/database'
import { database } from '@/resources/services/firebase'
import { getDate } from '@/resources/utils'

export default async function handler(req, res) {
  const { name, contact, message, contactOption } = req.body

  if (!name || !contact || !message || !contactOption) {
    return res.status(400).json({ data: 'Um ou mais campos não foram encontrados.' })
  }

  try {
    const date = getDate()

    const databaseRef = ref(database, 'contacts')
    const databaseData = { name, contactOption, contact, message, date }

    await push(databaseRef, databaseData)
    res.status(200).json({ data: 'Success' })
  } catch (error) {
    res.status(400).json({ data: 'Error', error })
  }
}
