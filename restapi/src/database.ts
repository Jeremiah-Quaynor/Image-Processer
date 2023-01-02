import { Pool } from 'pg'
import  dotenv from 'dotenv'
import { env } from 'process'

dotenv.config()

const connection = new Pool({
    user: env.POSTGRES_USERNAME , 
    host:  env.POSTGRES_HOST,
    database:  env.POSTGRES_DATABASE,
    password:  env.POSTGRES_PASSWORD,
    port:  Number(env.POSTGRES_PORT)
    
})

export default connection