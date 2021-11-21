import Poll from "../Poll"
import PollOption from "../PollOption"

export class CreatePollData {

    poll: Poll
    pollOptions: PollOption[]

    constructor(poll: Poll, pollOptions: PollOption[]) {
        this.poll = poll
        this.pollOptions = pollOptions
    }
}