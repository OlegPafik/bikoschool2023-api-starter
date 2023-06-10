import low  from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

interface DatabaseSchema {
    memes: Meme[]
  }
interface Meme{}

const adapter = new FileSync<DatabaseSchema>('./data/db.json')
const db = low(adapter)
export default db