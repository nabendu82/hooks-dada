import React from 'react'
import { ChannelContext, UserContext } from '../App'

const Child = () => {
    return (
        <UserContext.Consumer>
            {user => {
                return (
                    <ChannelContext.Consumer>
                        {channel => {
                            return (
                                <>
                                    <h1>User name - {user}</h1>
                                    <h1>Channel - {channel}</h1>
                                </>
                            )
                        }}
                    </ChannelContext.Consumer>
                )
            }}
        </UserContext.Consumer>
    )
}

export default Child