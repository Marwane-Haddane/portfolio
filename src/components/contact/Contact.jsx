import React from 'react'
import MagicBento from '../../jsrepo/grid'
import './contact.css'

function Contact() {
    return (
        <div className='contact-wrapper'>
            <div className='my-50'>

            </div>
            <button className='btncontact mx-20 '>Contact me</button>
            <div className='my-40 flex flex-row min-h-screen justify-center items-center'>
            <MagicBento 
                textAutoHide={true}
                enableStars={false}
                enableSpotlight
                enableBorderGlow={true}
                enableTilt
                enableMagnetism
                clickEffect
                spotlightRadius={540}
                particleCount={12}
                glowColor="132, 0, 255"
                disableAnimations={false}
            />
            </div>
        </div>
    )
}

export default Contact