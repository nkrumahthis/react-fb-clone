import React from 'react'
import './Sidebar.css'
import './SidebarRow'
import SidebarRow from './SidebarRow'

import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';

import { useStateValue } from "./StateProvider";

function Sidebar() {

    const [{ user }, dispatch ] = useStateValue();

    return ( 
        <div className="sidebar">
            { <SidebarRow 
                src={user.photoURL}
                title={user.displayName}/> }

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
