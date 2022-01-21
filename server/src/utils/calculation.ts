const getFloatPrecision = (number: number, point: number = 2): string => { //실수를 소수점 n자리까지 출력
    return number.toFixed(point);
}

export const getKda = (kills: number, deaths: number, assists: number): string => {
    const kda = ((kills + assists) / deaths);
    return getFloatPrecision(kda);
}

export const getKillParticipation = (killsParameter: number | undefined, assistsParameter: number | undefined, teamTotalKills: number): string => {
    const kills = killsParameter !== undefined ? killsParameter : 0;
    const assists = assistsParameter !== undefined ? assistsParameter : 0;
    const killParticipation = ((kills + assists) / teamTotalKills) * 100;
    return getFloatPrecision(killParticipation);
}