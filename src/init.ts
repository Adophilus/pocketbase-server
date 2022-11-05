import PocketBase from 'pocketbase'
import * as dotenv from 'dotenv'

dotenv.config()

const main = async () => {
  const pocketbaseClient = new PocketBase(process.env.POCKETBASE_URL)
}

main()
