import * as sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const setup = async () => {
    try  {
        const db = await open({
            filename: './poll-database.sqlite',
            driver: sqlite3.Database
        })
    
        await db.migrate({
            force: true,
            migrationsPath: './migrations'
        })
    }
    catch (e) {
        console.log(e)
    }
}

setup()