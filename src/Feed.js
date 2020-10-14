import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post 
                profilePic="https://asadadams.github.io/img/profile2.png"
                message="wow, this works"
                timestamp="14th October 2020"
                username="Asad Adams"
                image="https://pbs.twimg.com/media/EkTEqilWoAAv7Ze?format=jpg&name=small"
            />
            <Post 
                profilePic="https://pbs.twimg.com/profile_images/1303395915378692098/4dfC2_fm_400x400.jpg"
                message="I built this"
                timestamp="14th October 2020"
                username="Nkrumah Sarpong"
                image="https://pbs.twimg.com/media/EkRfKV2XcAAYYnK?format=jpg&name=small"
            />
            <Post />
            <Post />
            
        </div>
    )
}

export default Feed
