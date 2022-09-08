import React from 'react'

const StatisticsElement = ({ element }) => {
    return (
        <div className="statisticsElement">
            <div className="statisticsElement__img-container">
                <img src={element.img} alt={element.title} />
            </div>
            <div className="statisticsElement__content">
                <h3>{element.title}</h3>
                <p>{element.content}</p>
            </div>
        </div>
    )
}

export default StatisticsElement