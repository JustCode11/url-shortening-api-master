import React from 'react';
import StatisticsElement from './StatisticsElement';
import Img1 from '../images/icon-brand-recognition.svg';
import Img2 from '../images/icon-detailed-records.svg';
import Img3 from '../images/icon-fully-customizable.svg';

const Statistics = () => {
    const elements = [
        {
            title: "Brand Recognition",
            content: `Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.`,
            img: Img1
        },
        {
            title: "Detailed Records",
            content: `Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`,
            img: Img2
        },
        {
            title: "Fully Customizable",
            content: `Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`,
            img: Img3
        }
    ];
    return (
        <div className="statistics containerSmall">
            <div className="statistics__top">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            </div>
            <div className="statistics__elements">
                {elements.map((element, index) => {
                    return (
                        <StatisticsElement key={index} element={element} />
                    )
                })}
            </div>
        </div>
    )
}

export default Statistics