import { Avatar } from '@material-ui/core'
import React from 'react'
import "./MessageSender.css"

function MessageSender() {
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
            </div>
            <div className="messageSender__bottom">

            </div>
        </div>
    )
}

export default MessageSender

