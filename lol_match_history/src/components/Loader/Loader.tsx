import React, { useEffect, useState } from "react";
import loadingImage from "../../assets/images/loading.gif";

const Loader = (): JSX.Element => {
    const defaultLoadingText = "소환사님의 전적을 불러오고 있습니다 "
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
        <div className="loader no-drag">
            <img
                src={loadingImage}
                alt="로딩중"
                className="loader__loading-image"
            />
            <h4 className="loader__text">{loadingText}</h4>
        </div>
    )
}

export default Loader;