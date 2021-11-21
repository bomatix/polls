import { NextApiRequest, NextApiResponse } from "next"
import { open } from 'sqlite'
import { Database } from "sqlite3";
import { CreatePollData } from "../../models/data_carriers/CreatePollData";
import Poll from "../../models/Poll";
import PollOption from "../../models/PollOption";
import { STRING_ID_LENGTH } from "../../utils/consts";
import { randomStringId } from "../../utils/helper_functions";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Number>): Promise<void> {
    if(req.method == 'POST') {
        const db = await open({
            filename: '/Users/matijabojovic/Repos/poll-app/poll-database.sqlite', 
            driver: Database
        })

        const createPollData = JSON.parse(req.body) as CreatePollData

        console.log(createPollData.poll)
        await db.run(`INSERT INTO polls VALUES(?, ?, ?, ?, ?, ?, ?, ?)`, [
            randomStringId(STRING_ID_LENGTH),
            createPollData.poll.name,
            createPollData.poll.description,
            createPollData.poll.multichoice,
            createPollData.poll.anonymous_voting,
            createPollData.poll.authenticated_voting,
            createPollData.poll.anonymous_author,
            null
        ])
    }
    res.status(200);
    // res.json()
  }