import User from "./User"

export default class Poll {
    id?: string = ''
    name?: string = ''
    description?: string = ''

    multichoice: boolean = false
    anonymous_voting: boolean = true
    authenticated_voting: boolean = false
    anonymous_author: boolean = true

    pollCreator?: User

    constructor() {

    }
}