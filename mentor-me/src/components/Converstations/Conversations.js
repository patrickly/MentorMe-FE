import React from 'react'

import MenuNav from '../MenuNav/MenuNav'
import ConvoHeader from './ConvoHeader'
import ConvoBox from './ConvoBox'
import ConvoType from './ConvoType'

export default class Conversations extends React.Component {
    render() {
        return (
            <div className='convo-wrapper'>
                <MenuNav />
                <div className='convo-components'>
                    <ConvoHeader />
                    <ConvoBox />
                    <ConvoType />
                </div>
            </div>
        )
    }
}