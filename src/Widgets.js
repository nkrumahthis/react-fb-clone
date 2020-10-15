import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">
            <iframe 
                src="https://github.com/nkrumahthis/" 
                width="340"
                height="100%"
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
                style={{border: "none", overflow: "hidden"}}
                title="fb-clone-iframe"
            >  

            </iframe>
            
        </div>
    )
}

export default Widgets
