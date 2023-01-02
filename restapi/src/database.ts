import { Pool } from 'pg'
import  dotenv from 'dotenv'

dotenv.config()

const connection = new Pool({
    user: process.env.POSTGRES_USERNAME , 
    host:  process.env.POSTGRES_HOST,
    database:  process.env.POSTGRES_DATABASE,
    password:  process.env.POSTGRES_PASSWORD,
    port:  Number(process.env.POSTGRES_PORT)
    
})

export default connection