import React, { useContext } from 'react'
import Child from './Child'
import { ChannelContext, UserContext } from '../App'

const Parent = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <>
            <h1>User name with useContext- {user}</h1>
            <h2>Channel with useContext- {channel}</h2>
            <Child />
        </>
    )
}

export default Parent