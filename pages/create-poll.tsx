import React, { ChangeEvent } from 'react'
import { CreatePollData } from '../models/data_carriers/CreatePollData'
import Poll from '../models/Poll'
import PollOption from '../models/PollOption'
import styles from '../styles/CreatePoll.module.css'

const CreatePoll = () => {
    const [pollOptions, setPollOptions] = React.useState<PollOption[]>([])

    const [poll, setPoll] = React.useState<Poll>(new Poll());

    const [optionValue, setOptionValue] = React.useState('')

    const createPoll = async () => {
        let createPollData = new CreatePollData(poll, pollOptions)
        const response = await fetch('/api/create-poll', {
            method: 'POST',
            body: JSON.stringify(createPollData)
        })
    }

    const updatePollName = (e: ChangeEvent<HTMLInputElement>) => {
        // let tempPoll = {...poll}
        // tempPoll.name = e.target.value
        setPoll({...poll, name: e.target.value})
    }

    const addOption = () => {
        setPollOptions([...pollOptions, optionValue])
        setOptionValue('')
    }

    const updateOptionValue = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setOptionValue(e.target.value)
    }

    return (
        <div>
            <div className='container'>
                <h1>Create a new poll</h1>
                <input type='text' placeholder='Poll name' onChange={updatePollName} value={poll.name}/>
                <div>
                    <input type='text' onChange={updateOptionValue} value={optionValue} placeholder='Option name'/>
                    <input type='button' onClick={addOption} value='Add option'/>
                </div>
                <div>
                    <input type='checkbox'/>
                </div>
                <div>
                    {pollOptions.map(item => (<div>
                        <p>{item}</p>
                    </div>))}
                </div>
                <div>
                    <input type='button' value='Create poll' onClick={createPoll}/>
                </div>
            </div>
            
        </div>
    )
}

export default CreatePoll
