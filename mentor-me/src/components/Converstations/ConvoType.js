import React from 'react'
import { Input } from 'reactstrap'

export default function ConvoType() {
    return (
        <div className='convo-type-wrapper'>
            <Input
                type='text'
                placeholder='Type your message here'
            />
        </div>
    )
}