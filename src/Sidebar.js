import React from 'react'
import './Sidebar.css'
import './SidebarRow'
import SidebarRow from './SidebarRow'
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';

function Sidebar() {
    return ( 
        <div className="sidebar">
            { <SidebarRow 
                src='https://avatars2.githubusercontent.com/u/42615665?s=60&v=4' 
                title='nkrumahthis'/> }

            <SidebarRow 
                Icon={LocalHospital}
                title="COVID-19 Information Center"/>
            <SidebarRow 
                Icon={EmojiFlags} 
                title="Pages" />
            <SidebarRow 
                Icon={People} 
                title="Pages" />
            <SidebarRow 
                Icon={Chat} 
                title="Pages" />
            <SidebarRow 
                Icon={Storefront} 
                title="Pages" />
            <SidebarRow 
                Icon={VideoLibrary} 
                title="Pages" />
            <SidebarRow 
                Icon={ExpandMoreOutlined} 
                title="Marketplace" />
            
        </div>
    )
}

export default Sidebar
