import React, { useEffect, useState } from "react";
import i18n from "i18next";
import loadingImage from "../../assets/images/loading.gif";

const Loader = (): JSX.Element => {
    const defaultLoadingText = i18n.t('statusMessage.loader') + " "
    const [loadingText, setLoadingText] = useState(defaultLoadingText);

    useEffect(() => {
        const interval = setInterval(() => {
            if (loadingText.length < defaultLoadingText.length + 6) {
                setLoadingText(prev => prev + '. ')
            } else {
                setLoadingText(defaultLoadingText);
            }
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <div className="status-message loader no-drag">
            <img
                src={loadingImage}
                alt="로딩중"
                className="loader__loading-image status-message__image"
            />
            <h4 className="status-message__text loader__text">{loadingText}</h4>
        </div>
    )
}

export default Loader;