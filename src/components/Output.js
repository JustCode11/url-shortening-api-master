import React from 'react'

const Output = ({ url, short, copied, handleCopy, index }) => {
    return (
        <div className="output">
            <div className="output__insert-url-container">
                <p className="output__insert-url-container__insert-url">{url}</p>
            </div>
            <p className="output__shortened-url">{short}</p>
            <button className={copied ? 'copy' : ''} onClick={() => handleCopy(short, index)}>{copied ? 'Copied!' : 'Copy'}</button>
        </div>
    )
}

export default Output