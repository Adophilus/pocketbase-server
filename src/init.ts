import PocketBase from 'pocketbase'
import * as dotenv from 'dotenv'

dotenv.config()

const main = async () => {
  const pocketbaseClient = new PocketBase(process.env.POCKETBASE_URL)
  await pocketbaseClient.admins.create({
    email: process.env.POCKETBASE_ADMIN_EMAIL,
    password: process.env.POCKETBASE_ADMIN_PASSWORD,
    passwordConfirm: process.env.POCKETBASE_ADMIN_PASSWORD
  })
}

main()
