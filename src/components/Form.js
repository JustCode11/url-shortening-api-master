import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Output from './Output';

const getAllShortenedUrlFromLocalStorage = () => {
    const urls = localStorage.getItem("urls");

    return urls ? JSON.parse(localStorage.getItem("urls")) : [];
}

const getAllUserInputFromLocalStorage = () => {
    const urls = localStorage.getItem("urls");
    if (urls) {
        let array = JSON.parse(localStorage.getItem("urls"));
        let userInput = array.map((element) => {
            return element.url
        });
        return userInput;
    } else {
        return [];
    }
}

const Form = () => {
    const [userInput, setUserInput] = useState("");
    const [allUserInput, setAllUserInput] = useState(getAllUserInputFromLocalStorage());
    const [allShortenedUrls, setAllShortenedUrls] = useState(getAllShortenedUrlFromLocalStorage());
    const [submit, setSubmit] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [copyStates, setCopyStates] = useState([]);

    useEffect(() => {
        if (errorMessage === "" && submit) {
            addToStorage();
        }
    }, [submit, errorMessage]);

    const addToStorage = async () => {
        setSubmit(false);
        try {
            await axios(
                `https://api.shrtco.de/v2/shorten?url=${userInput}`
            ).then((res) => {
                const array = allShortenedUrls;
                array.push({ url: userInput, short: res.data.result.full_short_link });
                setAllShortenedUrls(array);
                localStorage.setItem('urls', JSON.stringify(array));
                setAllUserInput((prev) => [...prev, userInput]);
                setCopyStates((prev) => [...prev, false]);
            });
        } catch (e) {
            console.log(e);
        }
    }

    const validate = (value) => {
        let message = "";
        const regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
        if (!value) {
            message = "Please add a link";
        }
        if (allUserInput.includes(value)) {
            message = "Url already exist";
        }
        if (!value.match(regex)) {
            message = "This is not a valid URL";
        }
        return message;
    }

    const handleShortenedLinkButton = (evt) => {
        evt.preventDefault();
        setErrorMessage(validate(userInput));
        setSubmit(true);
    };

    const handleCopy = (short, index) => {
        let copyArray = copyStates;
        copyArray = copyArray.map(() => {
            return false;
        });
        copyArray[index] = true;
        setCopyStates(copyArray);
        navigator.clipboard.writeText(short);
    }
    return (
        <div className="form containerSmall">
            <form className={`form__container ${errorMessage !== "" ? 'warning' : ""}`}>
                <div className="form__container__input-container">
                    <input className={errorMessage !== "" ? 'warning' : ""} type="text" value={userInput} placeholder="Shorten a link here..." onChange={(e) => { setUserInput(e.target.value) }} />
                    <p className="form__container__input-container__error-message">{errorMessage}</p>
                </div>
                <button onClick={handleShortenedLinkButton}>Shorten It!</button>
            </form>
            <div className="form__output">
                {allShortenedUrls.map((element, index) => {
                    return (
                        <Output key={index} url={element.url} short={element.short} copied={copyStates[index]} handleCopy={handleCopy} index={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default Form