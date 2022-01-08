import React from "react";
import noResultImage from "../../assets/images/no-result.png";


const StatusMessage = ({ text }: { text: string }): JSX.Element => (
    <div className="status-message no-result no-drag">
        <img
            src={noResultImage}
            alt="검색 실패"
            className="status-message__image"
        />
        <h4 className="status-message__text no-result__text">{text}</h4>
    </div>
)

export default StatusMessage;