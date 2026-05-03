import React from 'react'
import FlowingMenu from '../../jsrepo/FlowingMenu'

function Project() {
    const demoItems = [
        { link: '#', text: 'project1', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'project2', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'project3', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'project4', image: 'https://picsum.photos/600/400?random=4' }
    ];
    return (
        <div>
            <div style={{ height: '600px', position: 'relative' }}>
                <FlowingMenu items={demoItems}
                    speed={15}
                    textColor="#ffffff"
                    bgColor="#060010"
                    marqueeBgColor="#ffffff"
                    marqueeTextColor="#060010"
                    borderColor="#ffffff"
                />
            </div>
        </div>
    )
}

export default Project