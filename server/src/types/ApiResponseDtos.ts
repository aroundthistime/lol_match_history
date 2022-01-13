interface MiniSeriesDTO {
    target: number;
    wins: number;
    losses: number;
    progress: string;
}

export interface TierDto {
    leagueId: string;
    summonerId: string;
    summonerName: string;
    queueType: string;
    tier: string;
    rank: string;
    leaguePoints: number;
    wins: number;
    losses: number;
    hotStreak: boolean;
    veteran: boolean;
    freshBlood: boolean;
    inactive: boolean;
    miniSeries?: MiniSeriesDTO;
}

export interface ParticipantDtoDefault {
    championId: number;
    teamId: number;
    summonerId: string;
    summonerName: string;
}

export interface ParticipantDtoCurrentGame extends ParticipantDtoDefault {
    perks: PerksDtoCurrentGame;
    profileIconId: number;
    bot: boolean;
    spell1Id: number;
    spell2Id: number;
    gameCustomizationObjects: GameCustomizationObject[];
}



export interface ParticipantDtoEndedGame extends ParticipantDtoDefault {
    perks: PerksDtoEndedGame;
    assists: number;
    baronKills: number;
    bountyLevel: number;
    champExperience: number;
    champLevel: number;
    championName: string
    championTransform: number;
    consumablesPurchased: number;
    damageDealtToBuildings: number;
    damageDealtToObjectives: number;
    damageDealtToTurrets: number;
    damageSelfMitigated: number;
    deaths: number;
    detectorWardsPlaced: number;
    doubleKills: number;
    dragonKills: number;
    firstBloodAssist: boolean;
    firstBloodKill: boolean;
    firstTowerAssist: boolean;
    firstTowerKill: boolean;
    gameEndedInEarlySurrender: boolean;
    gameEndedInSurrender: boolean;
    goldEarned: number;
    goldSpent: number;
    individualPosition: string;
    inhibitorKills: number;
    inhibitorTakedowns: number;
    inhibitorsLost: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    itemsPurchased: number;
    killingSprees: number;
    kills: number;
    lane: string;
    largestCriticalStrike: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    longestTimeSpentLiving: number;
    magicDamageDealt: number;
    magicDamageDealtToChampions: number;
    magicDamageTaken: number;
    neutralMinionsKilled: number;
    nexusKills: number;
    nexusTakedowns: number;
    nexusLost: number;
    objectivesStolen: number;
    objectivesStolenAssists: number;
    participantId: number;
    pentaKills: number;
    physicalDamageDealt: number;
    physicalDamageDealtToChampions: number;
    physicalDamageTaken: number;
    profileIcon: number;
    puuid: string;
    quadraKills: number;
    riotIdName: string;
    riotIdTagline: string;
    role: string;
    sightWardsBoughtInGame: number;
    spell1Casts: number;
    spell2Casts: number;
    spell3Casts: number;
    spell4Casts: number;
    summoner1Casts: number;
    summoner1Id: number;
    summoner2Casts: number;
    summoner2Id: number;
    summonerLevel: number;
    teamEarlySurrendered: boolean;
    teamPosition: string;
    timeCCingOthers: number;
    timePlayed: number;
    totalDamageDealt: number;
    totalDamageDealtToChampions: number;
    totalDamageShieldedOnTeammates: number;
    totalDamageTaken: number;
    totalHeal: number;
    totalHealsOnTeammates: number;
    totalMinionsKilled: number;
    totalTimeCCDealt: number;
    totalTimeSpentDead: number;
    totalUnitsHealed: number;
    tripleKills: number;
    trueDamageDealt: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    turretKills: number;
    turretTakedowns: number;
    turretsLost: number;
    unrealKills: number;
    visionScore: number;
    visionWardsBoughtInGame: number;
    wardsKilled: number;
    wardsPlaced: number;
    win: boolean;
}

export interface PerksDtoEndedGame {
    statPerks: PerkStatsDto;
    styles: PerkStyleDto[];
}

export interface PerksDtoCurrentGame {
    perkIds: number[];
    perkStyle: number;
    perkSubStyle: number;
}

export interface PerkStatsDto {
    defense: number;
    flex: number;
    offense: number;
}

export interface PerkStyleDto {
    description: string;
    selections: PerkStyleSelectionDto[];
    style: number;
}

export interface PerkStyleSelectionDto {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
}

export interface GameCustomizationObject {
    category: string;
    content: string;
}

export interface ChampionDto {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: ChampionInfoDto;
    image: ImageDto;
    tags: string[];
    partype: string;
    stats: ChampionStatsDto;
}

interface ChampionInfoDto {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

interface ChampionStatsDto {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

export interface SummonerSpellDto {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    maxrank: number;
    cooldown: number;
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: any;
    effect: any[];
    effectBurn: any[];
    vars: any[];
    key: string;
    summonerLevel: number;
    modes: string[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: ImageDto;
    resource: string;
}

interface ImageDto {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface PerkStyleDto {
    id: number;
    key: string;
    icon: string;
    name: string;
    slots: PerkSlotDto[];
}

export interface PerkSlotDto {
    runes: RuneDto[]
}

interface RuneDto {
    id: number;
    key: string;
    icon: string;
    name: string;
    shortDesc: string;
    longDesc: string;
}