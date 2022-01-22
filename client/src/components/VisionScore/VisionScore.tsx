import React, { useState } from "react";

const VisionScore = (
    { wardsPlaced, wardsKilled, detectorWardsPlaced, visionScore, className = "" }
        : { wardsPlaced: number, wardsKilled: number, detectorWardsPlaced: number, visionScore: number, className?: string }
) => {
    const [description, setDescription] = useState<string | false>(false);
    return (
        <div className="vision-scores">
            <VisionScore.Text
                score={wardsPlaced}
                scoreType="와드설치"
                description={description}
                setDescription={setDescription}
            />
            <VisionScore.Text
                score={wardsKilled}
                scoreType="와드제거"
                description={description}
                setDescription={setDescription}
            />
            <VisionScore.Text
                score={detectorWardsPlaced}
                scoreType="제어와드 구매"
                description={description}
                setDescription={setDescription}
            />
            <VisionScore.Text
                score={visionScore}
                scoreType="시야점수"
                description={description}
                setDescription={setDescription}
            />
        </div >
    )
}

VisionScore.Text = (
    { score, scoreType, description, setDescription }
        : { score: number, scoreType: string, description: string | false, setDescription: Function }
): JSX.Element => (
    <div
        className="vision-scores__vision-score"
        onMouseOver={() => setDescription(scoreType)}
        onMouseLeave={() => setDescription(false)}
    >
        {score}
        {description === scoreType && (
            <div className="vision-scores__description">{description}</div>
        )}
    </div>

)

export default VisionScore