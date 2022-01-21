const getFloatPrecision = (number: number, point: number = 2): string => { //실수를 소수점 n자리까지 출력
    return number.toFixed(point);
}

export const getKda = (kills: number, deaths: number, assists: number): string => {
    const kda = ((kills + assists) / deaths);
    return getFloatPrecision(kda);
}

export const getKillParticipation = (kills: number, assists: number, teamTotalKills: number): string => {
    const killParticipation = ((kills + assists) / teamTotalKills) * 100;
    return getFloatPrecision(killParticipation);
}