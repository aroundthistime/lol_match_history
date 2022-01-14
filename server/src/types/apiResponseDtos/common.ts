//하나 이상의 API에서 공통적으로 등장하는 부분
export interface ParticipantDtoDefault {
    championId: number;
    teamId: number;
    summonerId: string;
    summonerName: string;
}

export interface ImageDto {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}