import React from 'react';
import TopImage from '../images/illustration-working.svg';

const Top = () => {
    return (
        <div className="top containerSmall">
            <div className="top__left">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
            <div className="top__right">
                <img src={TopImage} alt="illustration-working" />
            </div>
        </div>
    )
}

export default Top