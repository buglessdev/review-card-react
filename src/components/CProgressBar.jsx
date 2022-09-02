import ProgressBar from '@ramonak/react-progress-bar'

import React from 'react'

import { FaStar } from 'react-icons/fa'



function CProgressBar({ rating, pc }) {
    return (
        <div className="progress-bar-container">
            <div className="pb-text">{rating} <FaStar color='#EFB153' /></div>
            <div className="progress-bar">

                <ProgressBar completed={pc} isLabelVisible={false} bgColor={'#EFB153'} />
            </div>
        </div>

    )
}

export default CProgressBar

