import React from 'react'
import "./AwardCard.scss"

const AwardCard = ({image, title, subtitle}) => {
  return (
    <div className='app__laurels_awards-card'>
        <img src={image} alt="award" />
        <div className="app__laurels_awards-card_content">
            <p className="p__main-font">{title}</p>
            <p className="p__main-font">{subtitle}</p>
        </div>
    </div>
  )
}

export default AwardCard