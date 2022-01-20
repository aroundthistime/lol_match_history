import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CurrentMatch from '../../components/CurrentMatch/CurrentMatch';
import Loader from '../../components/Loader/Loader';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserTiers from '../../components/UserTier/UserTiers/UserTiers';
import { SearchTargetUser } from '../../types/User/User';


const Histories = (): JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<SearchTargetUser | undefined | false>();
    const params = useParams();
    const { username } = params;

    const fetchUser = async () => {
        setLoading(true);
        if (username) {
            try {
                const response = {
                    data: {
                        result: true,
                        user:
                        {
                            name: "Faith1",
                            profileIcon: "http://127.0.0.1:4000/static/img/profileicon/3151.png",
                            accountId: "sa62xaNOK6hNbdq1zDhaQoq6OmyhK2tWpHM-NVqAv7Me",
                            id: "Lj0pJb--HPlHB3EB_dj40IfhkIEmDGWFy1iztuwZF1v-aQ",
                            puuid: "cGQdExpEyA6z77dWtd4AG7p-zHd6OM2-0RvV0rG852fMZOCV8lyx4rIe6P9IZnP9f2CdRFBnUjKWqw",
                            summonerLevel: 551,
                            tiers: {
                                solo: {
                                    tier: "DIAMOND",
                                    tierImage: "http://127.0.0.1:4000/static/img/tiers/DIAMOND.png",
                                    rank: "I",
                                    leaguePoints: 100,
                                    wins: 83,
                                    losses: 79,
                                    miniSeries: {
                                        target: 3,
                                        wins: 1,
                                        losses: 1,
                                        progress: "WLNNN"
                                    }
                                },
                                team: {
                                    tier: "UNRANKED",
                                    tierImage: "http://127.0.0.1:4000/static/img/tiers/UNRANKED.png"
                                }
                            },
                            currentMatch: {
                                id: "5704050398",
                                gameMode: "솔랭",
                                gameStartTime: 1642687408612,
                                gameLength: 271,
                                participants: [
                                    {
                                        name: "M4ASLR",
                                        id: "eyxWcH2lcyAiVHFaxnUE-xYlBop4SHQht-18AO6VNghL-s8t",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 518,
                                            name: "니코",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Neeko.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8300,
                                                name: "영감",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8351,
                                                    name: "빙결 강화",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
                                                },
                                                {
                                                    id: 8304,
                                                    name: "마법의 신발",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                },
                                                {
                                                    id: 8345,
                                                    name: "비스킷 배달",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                },
                                                {
                                                    id: 8347,
                                                    name: "우주적 통찰력",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8100,
                                                name: "지배",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8126,
                                                    name: "비열한 한 방",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/CheapShot/CheapShot.png"
                                                },
                                                {
                                                    id: 8134,
                                                    name: "영리한 사냥꾼",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 14,
                                                name: "점화",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "발씨끼새죽었으면",
                                        id: "IE7fxet-FtKoYfOPqbz2ecgSs2jOwi_NNCHLkAegJS3-ZvY",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 202,
                                            name: "진",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jhin.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8000,
                                                name: "정밀",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8021,
                                                    name: "기민한 발놀림",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
                                                },
                                                {
                                                    id: 8009,
                                                    name: "침착",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                },
                                                {
                                                    id: 9103,
                                                    name: "전설: 핏빛 길",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                },
                                                {
                                                    id: 8017,
                                                    name: "체력차 극복",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CutDown/CutDown.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8300,
                                                name: "영감",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8345,
                                                    name: "비스킷 배달",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                },
                                                {
                                                    id: 8352,
                                                    name: "시간 왜곡 물약",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 7,
                                                name: "회복",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHeal.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "Aredbb",
                                        id: "1kf_0W_75GczOIR5Zv_TLEBBqDYtA2xutveYyjlDqVWDBJUobr2SVAEjzQ",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 126,
                                            name: "제이스",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jayce.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8300,
                                                name: "영감",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8369,
                                                    name: "선제공격",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
                                                },
                                                {
                                                    id: 8304,
                                                    name: "마법의 신발",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                },
                                                {
                                                    id: 8345,
                                                    name: "비스킷 배달",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                },
                                                {
                                                    id: 8352,
                                                    name: "시간 왜곡 물약",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8200,
                                                name: "마법",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8226,
                                                    name: "마나순환 팔찌",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png"
                                                },
                                                {
                                                    id: 8210,
                                                    name: "깨달음",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 12,
                                                name: "순간이동",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "1등1등",
                                        id: "nANL4uH0dXVIKdfXWAhfJVliaJ3JcUB9TmfrK1HkdkOeQfo",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 64,
                                            name: "리 신",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/LeeSin.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8000,
                                                name: "정밀",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8010,
                                                    name: "정복자",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                },
                                                {
                                                    id: 9111,
                                                    name: "승전보",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                },
                                                {
                                                    id: 9104,
                                                    name: "전설: 민첩함",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                },
                                                {
                                                    id: 8014,
                                                    name: "최후의 일격",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8300,
                                                name: "영감",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8304,
                                                    name: "마법의 신발",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                },
                                                {
                                                    id: 8347,
                                                    name: "우주적 통찰력",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 11,
                                                name: "강타",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "IRIDESCNT",
                                        id: "pwY-KELa-ivqQFOtG5wpdo_M03Jd0xoMd5EcdG-4eM1b3FU",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 42,
                                            name: "코르키",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Corki.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8300,
                                                name: "영감",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8369,
                                                    name: "선제공격",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
                                                },
                                                {
                                                    id: 8304,
                                                    name: "마법의 신발",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                },
                                                {
                                                    id: 8316,
                                                    name: "미니언 해체분석기",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
                                                },
                                                {
                                                    id: 8352,
                                                    name: "시간 왜곡 물약",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8400,
                                                name: "결의",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8473,
                                                    name: "뼈 방패",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                },
                                                {
                                                    id: 8242,
                                                    name: "불굴의 의지",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 12,
                                                name: "순간이동",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "Mocha",
                                        id: "Fn_Mcl68Emlkzl7cQC_PH5s-da9CHtjzGGivoKLnb3xsras",
                                        isSearchTarget: false,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 235,
                                            name: "세나",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Senna.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8400,
                                                name: "결의",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8437,
                                                    name: "착취의 손아귀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
                                                },
                                                {
                                                    id: 8446,
                                                    name: "철거",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Demolish/Demolish.png"
                                                },
                                                {
                                                    id: 8473,
                                                    name: "뼈 방패",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                },
                                                {
                                                    id: 8451,
                                                    name: "과잉성장",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8000,
                                                name: "정밀",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8009,
                                                    name: "침착",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                },
                                                {
                                                    id: 9104,
                                                    name: "전설: 민첩함",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 3,
                                                name: "탈진",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerExhaust.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "김따코",
                                        id: "GO7DBbovELilBzUDUX66CwG94Oc5kMfM5sdpl5DzT12_Vg",
                                        isSearchTarget: false,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 145,
                                            name: "카이사",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Kaisa.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8100,
                                                name: "지배",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                            },
                                            slots: [
                                                {
                                                    id: 9923,
                                                    name: "칼날비",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
                                                },
                                                {
                                                    id: 8139,
                                                    name: "피의 맛",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
                                                },
                                                {
                                                    id: 8138,
                                                    name: "사냥의 증표",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                },
                                                {
                                                    id: 8135,
                                                    name: "굶주린 사냥꾼",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8300,
                                                name: "영감",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8345,
                                                    name: "비스킷 배달",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                },
                                                {
                                                    id: 8347,
                                                    name: "우주적 통찰력",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 7,
                                                name: "회복",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHeal.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "Gon123",
                                        id: "dgdS8U0UN9PtcTwUBg7XEwYNR3zgC6v5lCdV1E_blOqZ8IU",
                                        isSearchTarget: false,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 84,
                                            name: "아칼리",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Akali.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8000,
                                                name: "정밀",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8010,
                                                    name: "정복자",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                },
                                                {
                                                    id: 8009,
                                                    name: "침착",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                },
                                                {
                                                    id: 9105,
                                                    name: "전설: 강인함",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                },
                                                {
                                                    id: 8014,
                                                    name: "최후의 일격",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8400,
                                                name: "결의",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8444,
                                                    name: "재생의 바람",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png"
                                                },
                                                {
                                                    id: 8451,
                                                    name: "과잉성장",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 14,
                                                name: "점화",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                            },
                                            {
                                                id: 12,
                                                name: "순간이동",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "김치 맛없다",
                                        id: "wBFNJ5FgDTAQP6WPEBcwHI-o1aGPOLfK43jfOvjM37hW0B8",
                                        isSearchTarget: false,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 234,
                                            name: "비에고",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Viego.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8000,
                                                name: "정밀",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8010,
                                                    name: "정복자",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                },
                                                {
                                                    id: 9111,
                                                    name: "승전보",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                },
                                                {
                                                    id: 9105,
                                                    name: "전설: 강인함",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                },
                                                {
                                                    id: 8014,
                                                    name: "최후의 일격",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8300,
                                                name: "영감",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8304,
                                                    name: "마법의 신발",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                },
                                                {
                                                    id: 8347,
                                                    name: "우주적 통찰력",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 11,
                                                name: "강타",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "Faith1",
                                        id: "Lj0pJb--HPlHB3EB_dj40IfhkIEmDGWFy1iztuwZF1v-aQ",
                                        isSearchTarget: true,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 112,
                                            name: "빅토르",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Viktor.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8200,
                                                name: "마법",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8214,
                                                    name: "콩콩이 소환",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
                                                },
                                                {
                                                    id: 8226,
                                                    name: "마나순환 팔찌",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png"
                                                },
                                                {
                                                    id: 8210,
                                                    name: "깨달음",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                },
                                                {
                                                    id: 8237,
                                                    name: "주문 작열",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Scorch/Scorch.png"
                                                }
                                            ]
                                        },
                                        subPerks: {
                                            style: {
                                                id: 8300,
                                                name: "영감",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8345,
                                                    name: "비스킷 배달",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                },
                                                {
                                                    id: 8352,
                                                    name: "시간 왜곡 물약",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                }
                                            ]
                                        },
                                        summonerSpells: [
                                            {
                                                id: 12,
                                                name: "순간이동",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    }
                                ],
                                blueTeam: {
                                    bans: [
                                        {
                                            id: 412,
                                            name: "쓰레쉬",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Thresh.png"
                                        },
                                        null,
                                        {
                                            id: 76,
                                            name: "니달리",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Nidalee.png"
                                        },
                                        {
                                            id: 350,
                                            name: "유미",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Yuumi.png"
                                        },
                                        {
                                            id: 24,
                                            name: "잭스",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jax.png"
                                        }
                                    ]
                                },
                                redTeam: {
                                    bans: [
                                        {
                                            id: 246,
                                            name: "키아나",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Qiyana.png"
                                        },
                                        {
                                            id: 43,
                                            name: "카르마",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karma.png"
                                        },
                                        {
                                            id: 105,
                                            name: "피즈",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Fizz.png"
                                        },
                                        {
                                            id: 7,
                                            name: "르블랑",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Leblanc.png"
                                        },
                                        {
                                            id: 23,
                                            name: "트린다미어",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Tryndamere.png"
                                        }
                                    ]
                                }
                            },
                            latestMatches: [
                                {
                                    id: "KR_5703673519",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642685469251,
                                    gameLength: 1613,
                                    participants: [
                                        {
                                            name: "지훈좌의프로토스",
                                            id: "TwHs23DDn30wcX0Xx-ETXpNUiLixqX1jyk-yrXEmtCJJcL6PjZhH4DmCGw",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 3,
                                            deaths: 6,
                                            assists: 4,
                                            kda: "1.167",
                                            killParticipation: "33.333",
                                            goldEarned: 9764,
                                            cs: 175,
                                            totalDamageDealt: 93374,
                                            totalDamageTaken: 27400,
                                            wardsPlaced: 8,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 1,
                                            visionScore: 17,
                                            champion: {
                                                id: 887,
                                                name: "그웬",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Gwen.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 6,
                                                    name: "유체화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHaste.png"
                                                },
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 1052,
                                                    name: "증폭의 고서",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1052.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 4633,
                                                    name: "균열 생성기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4633.png"
                                                },
                                                {
                                                    id: 1026,
                                                    name: "방출의 마법봉",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1026.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "임도만",
                                            id: "i4F5xWbdwlQMzqOam0HmABdDa9qJ-cGkmrrDyNUSuonMkT3Uyu3AY5BNzg",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 7,
                                            deaths: 10,
                                            assists: 2,
                                            kda: "0.900",
                                            killParticipation: "42.857",
                                            goldEarned: 11200,
                                            cs: 35,
                                            totalDamageDealt: 143526,
                                            totalDamageTaken: 19777,
                                            wardsPlaced: 7,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 5,
                                            visionScore: 17,
                                            champion: {
                                                id: 104,
                                                name: "그레이브즈",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Graves.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8128,
                                                        name: "어둠의 수확",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
                                                    },
                                                    {
                                                        id: 8143,
                                                        name: "돌발 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png"
                                                    },
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3006,
                                                    name: "광전사의 군화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3006.png"
                                                },
                                                {
                                                    id: 6671,
                                                    name: "돌풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6671.png"
                                                },
                                                {
                                                    id: 6676,
                                                    name: "징수의 총",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6676.png"
                                                },
                                                {
                                                    id: 3035,
                                                    name: "최후의 속삭임",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3035.png"
                                                },
                                                {
                                                    id: 1018,
                                                    name: "민첩성의 망토",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1018.png"
                                                },
                                                {
                                                    id: 2420,
                                                    name: "초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2420.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "zxlkcjqwpe",
                                            id: "x0fQKmjy9C-EOZB359uWVsZl9hBTyx7tEdmtyWhxb_hnSSKL81Ddt-9JcA",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 9,
                                            deaths: 12,
                                            assists: 5,
                                            kda: "1.167",
                                            killParticipation: "66.667",
                                            goldEarned: 9883,
                                            cs: 155,
                                            totalDamageDealt: 91218,
                                            totalDamageTaken: 34397,
                                            wardsPlaced: 9,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 5,
                                            visionScore: 31,
                                            champion: {
                                                id: 517,
                                                name: "사일러스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Sylas.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9105,
                                                        name: "전설: 강인함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3145,
                                                    name: "마법공학 교류 발전기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3145.png"
                                                },
                                                {
                                                    id: 3108,
                                                    name: "악마의 마법서",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3108.png"
                                                },
                                                {
                                                    id: 6656,
                                                    name: "만년서리",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6656.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 1082,
                                                    name: "암흑의 인장",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1082.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Faith1",
                                            id: "Lj0pJb--HPlHB3EB_dj40IfhkIEmDGWFy1iztuwZF1v-aQ",
                                            isSearchTarget: true,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 1,
                                            deaths: 5,
                                            assists: 7,
                                            kda: "1.600",
                                            killParticipation: "38.095",
                                            goldEarned: 10819,
                                            cs: 210,
                                            totalDamageDealt: 136164,
                                            totalDamageTaken: 17568,
                                            wardsPlaced: 8,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 0,
                                            visionScore: 14,
                                            champion: {
                                                id: 81,
                                                name: "이즈리얼",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Ezreal.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 7,
                                                    name: "회복",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHeal.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8369,
                                                        name: "선제공격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
                                                    },
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9103,
                                                        name: "전설: 핏빛 길",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 4644,
                                                    name: "부서진 여왕의 왕관",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4644.png"
                                                },
                                                {
                                                    id: 3508,
                                                    name: "정수 약탈자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3508.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3042,
                                                    name: "무라마나",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3042.png"
                                                },
                                                {
                                                    id: 1055,
                                                    name: "도란의 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1055.png"
                                                },
                                                {
                                                    id: 1036,
                                                    name: "롱소드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1036.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Mocha",
                                            id: "Fn_Mcl68Emlkzl7cQC_PH5s-da9CHtjzGGivoKLnb3xsras",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 12,
                                            kills: 1,
                                            deaths: 11,
                                            assists: 10,
                                            kda: "1.000",
                                            killParticipation: "52.381",
                                            goldEarned: 6711,
                                            cs: 20,
                                            totalDamageDealt: 27157,
                                            totalDamageTaken: 21036,
                                            wardsPlaced: 27,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 6,
                                            visionScore: 36,
                                            champion: {
                                                id: 235,
                                                name: "세나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Senna.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 3,
                                                    name: "탈진",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerExhaust.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8229,
                                                        name: "신비로운 유성",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
                                                    },
                                                    {
                                                        id: 8226,
                                                        name: "마나순환 팔찌",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png"
                                                    },
                                                    {
                                                        id: 8210,
                                                        name: "깨달음",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                    },
                                                    {
                                                        id: 8237,
                                                        name: "주문 작열",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Scorch/Scorch.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8126,
                                                        name: "비열한 한 방",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/CheapShot/CheapShot.png"
                                                    },
                                                    {
                                                        id: 8106,
                                                        name: "궁극의 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 4005,
                                                    name: "제국의 명령",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4005.png"
                                                },
                                                {
                                                    id: 3864,
                                                    name: "검은 안개 낫",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3864.png"
                                                },
                                                {
                                                    id: 1036,
                                                    name: "롱소드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1036.png"
                                                },
                                                {
                                                    id: 1036,
                                                    name: "롱소드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1036.png"
                                                },
                                                {
                                                    id: 3133,
                                                    name: "콜필드의 전투 망치",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3133.png"
                                                },
                                                {
                                                    id: 3009,
                                                    name: "신속의 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3009.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "애기야 야옹해봐",
                                            id: "g0wflx0qPKgaUZY8xf1xaCkbziuMcrdnSykJeKTxz_5cIZ3y3UfEUyi9kg",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 15,
                                            kills: 5,
                                            deaths: 7,
                                            assists: 9,
                                            kda: "2.000",
                                            killParticipation: "31.818",
                                            goldEarned: 10229,
                                            cs: 129,
                                            totalDamageDealt: 98317,
                                            totalDamageTaken: 19472,
                                            wardsPlaced: 2,
                                            wardsKilled: 6,
                                            detectorWardsPlaced: 2,
                                            visionScore: 23,
                                            champion: {
                                                id: 105,
                                                name: "피즈",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Fizz.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8112,
                                                        name: "감전",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/Electrocute/Electrocute.png"
                                                    },
                                                    {
                                                        id: 8143,
                                                        name: "돌발 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png"
                                                    },
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9105,
                                                        name: "전설: 강인함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 2033,
                                                    name: "부패 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2033.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 3108,
                                                    name: "악마의 마법서",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3108.png"
                                                },
                                                {
                                                    id: 6655,
                                                    name: "루덴의 폭풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6655.png"
                                                },
                                                {
                                                    id: 1082,
                                                    name: "암흑의 인장",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1082.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "beleubantoseu",
                                            id: "O8526HELvyIVGpg9fYPP_71LLetqd_TXQQJEiUH4ZdbvJo3F",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 16,
                                            kills: 25,
                                            deaths: 3,
                                            assists: 9,
                                            kda: "11.333",
                                            killParticipation: "77.273",
                                            goldEarned: 18069,
                                            cs: 36,
                                            totalDamageDealt: 190405,
                                            totalDamageTaken: 57845,
                                            wardsPlaced: 5,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 4,
                                            visionScore: 20,
                                            champion: {
                                                id: 5,
                                                name: "신 짜오",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/XinZhao.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                null,
                                                {
                                                    id: 3033,
                                                    name: "필멸자의 운명",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3033.png"
                                                },
                                                {
                                                    id: 3026,
                                                    name: "수호 천사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3026.png"
                                                },
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 6333,
                                                    name: "죽음의 무도",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6333.png"
                                                },
                                                {
                                                    id: 3111,
                                                    name: "헤르메스의 발걸음",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3111.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "kukukukuku",
                                            id: "II_hSAZAj58XM18nnMUptvhFAWn2rRUkBCULP8YHHkrzSi0",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 16,
                                            kills: 3,
                                            deaths: 4,
                                            assists: 18,
                                            kda: "5.250",
                                            killParticipation: "47.727",
                                            goldEarned: 10918,
                                            cs: 144,
                                            totalDamageDealt: 104927,
                                            totalDamageTaken: 24363,
                                            wardsPlaced: 8,
                                            wardsKilled: 1,
                                            detectorWardsPlaced: 1,
                                            visionScore: 14,
                                            champion: {
                                                id: 516,
                                                name: "오른",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Ornn.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8437,
                                                        name: "착취의 손아귀",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
                                                    },
                                                    {
                                                        id: 8463,
                                                        name: "생명의 샘",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png"
                                                    },
                                                    {
                                                        id: 8444,
                                                        name: "재생의 바람",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png"
                                                    },
                                                    {
                                                        id: 8453,
                                                        name: "소생",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Revitalize/Revitalize.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3121,
                                                    name: "종말의 겨울",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3121.png"
                                                },
                                                {
                                                    id: 2033,
                                                    name: "부패 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2033.png"
                                                },
                                                null,
                                                {
                                                    id: 1011,
                                                    name: "거인의 허리띠",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1011.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 3076,
                                                    name: "덤불 조끼",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3076.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "ADCGOD 18",
                                            id: "Jkb8-SibsHEOLK_buEWUPs5KJGtaVMIWvN5CYlkHT29J7WWWS8uq0oB0EQ",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 15,
                                            kills: 10,
                                            deaths: 2,
                                            assists: 5,
                                            kda: "7.500",
                                            killParticipation: "34.091",
                                            goldEarned: 14915,
                                            cs: 209,
                                            totalDamageDealt: 157544,
                                            totalDamageTaken: 18141,
                                            wardsPlaced: 10,
                                            wardsKilled: 10,
                                            detectorWardsPlaced: 3,
                                            visionScore: 42,
                                            champion: {
                                                id: 18,
                                                name: "트리스타나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Tristana.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 1,
                                                    name: "정화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerBoost.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 9923,
                                                        name: "칼날비",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
                                                    },
                                                    {
                                                        id: 8139,
                                                        name: "피의 맛",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
                                                    },
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9103,
                                                        name: "전설: 핏빛 길",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3006,
                                                    name: "광전사의 군화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3006.png"
                                                },
                                                {
                                                    id: 3031,
                                                    name: "무한의 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3031.png"
                                                },
                                                {
                                                    id: 3095,
                                                    name: "폭풍갈퀴",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3095.png"
                                                },
                                                {
                                                    id: 1055,
                                                    name: "도란의 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1055.png"
                                                },
                                                null,
                                                {
                                                    id: 3046,
                                                    name: "유령 무희",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3046.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "도구는 툴툴",
                                            id: "n1JpS-4dBDub6t86XA79zA9r9KmYe2Ad47si12oxVkZRgfA",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 13,
                                            kills: 1,
                                            deaths: 5,
                                            assists: 15,
                                            kda: "3.200",
                                            killParticipation: "36.364",
                                            goldEarned: 7910,
                                            cs: 36,
                                            totalDamageDealt: 33619,
                                            totalDamageTaken: 22985,
                                            wardsPlaced: 48,
                                            wardsKilled: 9,
                                            detectorWardsPlaced: 9,
                                            visionScore: 89,
                                            champion: {
                                                id: 223,
                                                name: "탐 켄치",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/TahmKench.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 9923,
                                                        name: "칼날비",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
                                                    },
                                                    {
                                                        id: 8139,
                                                        name: "피의 맛",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
                                                    },
                                                    {
                                                        id: 8136,
                                                        name: "좀비 와드",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/ZombieWard/ZombieWard.png"
                                                    },
                                                    {
                                                        id: 8105,
                                                        name: "끈질긴 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3076,
                                                    name: "덤불 조끼",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3076.png"
                                                },
                                                {
                                                    id: 3860,
                                                    name: "타곤 산의 방벽",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3860.png"
                                                },
                                                {
                                                    id: 1011,
                                                    name: "거인의 허리띠",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1011.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                null,
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        }
                                    ],
                                    blueTeam: {
                                        bans: [
                                            {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karma.png"
                                            },
                                            {
                                                id: 51,
                                                name: "케이틀린",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Caitlyn.png"
                                            },
                                            {
                                                id: 17,
                                                name: "티모",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Teemo.png"
                                            },
                                            {
                                                id: 30,
                                                name: "카서스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karthus.png"
                                            },
                                            null
                                        ],
                                        win: false,
                                        championKills: 21,
                                        dragonKills: 1,
                                        baronKills: 0,
                                        towerKills: 1,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 0
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 64,
                                                name: "리 신",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/LeeSin.png"
                                            },
                                            {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karma.png"
                                            },
                                            {
                                                id: 23,
                                                name: "트린다미어",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Tryndamere.png"
                                            },
                                            {
                                                id: 7,
                                                name: "르블랑",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Leblanc.png"
                                            },
                                            {
                                                id: 246,
                                                name: "키아나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Qiyana.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 44,
                                        dragonKills: 3,
                                        baronKills: 1,
                                        towerKills: 9,
                                        inhibitorKills: 1,
                                        riftHeraldKills: 2
                                    }
                                },
                                {
                                    id: "KR_5703566840",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642683603280,
                                    gameLength: 1361,
                                    participants: [
                                        {
                                            name: "내잘못은아닌거야",
                                            id: "YNzoCSsSsee-hRQacb9RR-d8d3ENM1UVhu9g2HTJI4o4dYw",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 2,
                                            deaths: 4,
                                            assists: 5,
                                            kda: "1.750",
                                            killParticipation: "18.919",
                                            goldEarned: 8472,
                                            cs: 143,
                                            totalDamageDealt: 87101,
                                            totalDamageTaken: 20057,
                                            wardsPlaced: 7,
                                            wardsKilled: 1,
                                            detectorWardsPlaced: 0,
                                            visionScore: 16,
                                            champion: {
                                                id: 79,
                                                name: "그라가스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Gragas.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8437,
                                                        name: "착취의 손아귀",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
                                                    },
                                                    {
                                                        id: 8446,
                                                        name: "철거",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Demolish/Demolish.png"
                                                    },
                                                    {
                                                        id: 8429,
                                                        name: "사전 준비",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Conditioning/Conditioning.png"
                                                    },
                                                    {
                                                        id: 8242,
                                                        name: "불굴의 의지",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8226,
                                                        name: "마나순환 팔찌",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png"
                                                    },
                                                    {
                                                        id: 8210,
                                                        name: "깨달음",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3121,
                                                    name: "종말의 겨울",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3121.png"
                                                },
                                                {
                                                    id: 6664,
                                                    name: "터보 화공 탱크",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6664.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                null,
                                                {
                                                    id: 3076,
                                                    name: "덤불 조끼",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3076.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "블러푸",
                                            id: "_yZOudCpERjUpw7gsJV_BCe2nds1JAZbWN44ylbFBFvllYo",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 18,
                                            deaths: 1,
                                            assists: 12,
                                            kda: "30.000",
                                            killParticipation: "81.081",
                                            goldEarned: 14046,
                                            cs: 33,
                                            totalDamageDealt: 138744,
                                            totalDamageTaken: 30187,
                                            wardsPlaced: 5,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 3,
                                            visionScore: 22,
                                            champion: {
                                                id: 120,
                                                name: "헤카림",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Hecarim.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                },
                                                {
                                                    id: 6,
                                                    name: "유체화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHaste.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8230,
                                                        name: "난입",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png"
                                                    },
                                                    {
                                                        id: 8275,
                                                        name: "빛의 망토",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png"
                                                    },
                                                    {
                                                        id: 8234,
                                                        name: "기민함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Celerity/CelerityTemp.png"
                                                    },
                                                    {
                                                        id: 8232,
                                                        name: "물 위를 걷는 자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6632,
                                                    name: "신성한 파괴자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6632.png"
                                                },
                                                {
                                                    id: 2420,
                                                    name: "초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2420.png"
                                                },
                                                {
                                                    id: 3123,
                                                    name: "처형인의 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3123.png"
                                                },
                                                {
                                                    id: 6333,
                                                    name: "죽음의 무도",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6333.png"
                                                },
                                                {
                                                    id: 3065,
                                                    name: "정령의 형상",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3065.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Faith1",
                                            id: "Lj0pJb--HPlHB3EB_dj40IfhkIEmDGWFy1iztuwZF1v-aQ",
                                            isSearchTarget: true,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 8,
                                            deaths: 2,
                                            assists: 9,
                                            kda: "8.500",
                                            killParticipation: "45.946",
                                            goldEarned: 10313,
                                            cs: 153,
                                            totalDamageDealt: 88075,
                                            totalDamageTaken: 9491,
                                            wardsPlaced: 4,
                                            wardsKilled: 7,
                                            detectorWardsPlaced: 1,
                                            visionScore: 19,
                                            champion: {
                                                id: 4,
                                                name: "트위스티드 페이트",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/TwistedFate.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8112,
                                                        name: "감전",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/Electrocute/Electrocute.png"
                                                    },
                                                    {
                                                        id: 8139,
                                                        name: "피의 맛",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
                                                    },
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8316,
                                                        name: "미니언 해체분석기",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6656,
                                                    name: "만년서리",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6656.png"
                                                },
                                                {
                                                    id: 2033,
                                                    name: "부패 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2033.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 3041,
                                                    name: "메자이의 영혼약탈자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3041.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3086,
                                                    name: "열정의 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3086.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "kukukukuku",
                                            id: "II_hSAZAj58XM18nnMUptvhFAWn2rRUkBCULP8YHHkrzSi0",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 8,
                                            deaths: 2,
                                            assists: 10,
                                            kda: "9.000",
                                            killParticipation: "48.649",
                                            goldEarned: 11249,
                                            cs: 192,
                                            totalDamageDealt: 123299,
                                            totalDamageTaken: 11849,
                                            wardsPlaced: 10,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 2,
                                            visionScore: 27,
                                            champion: {
                                                id: 523,
                                                name: "아펠리오스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Aphelios.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 7,
                                                    name: "회복",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHeal.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8005,
                                                        name: "집중 공격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
                                                    },
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9103,
                                                        name: "전설: 핏빛 길",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                    },
                                                    {
                                                        id: 8017,
                                                        name: "체력차 극복",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CutDown/CutDown.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8139,
                                                        name: "피의 맛",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
                                                    },
                                                    {
                                                        id: 8134,
                                                        name: "영리한 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6676,
                                                    name: "징수의 총",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6676.png"
                                                },
                                                {
                                                    id: 6671,
                                                    name: "돌풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6671.png"
                                                },
                                                {
                                                    id: 1038,
                                                    name: "B.F. 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1038.png"
                                                },
                                                {
                                                    id: 3006,
                                                    name: "광전사의 군화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3006.png"
                                                },
                                                null,
                                                null,
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "ye wan dao bie",
                                            id: "v7EtAEDzy6-tEBwzVeqQeuhUKNaVSxSdANN3yGQswe3hGvhkhbcHBV3LZA",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 11,
                                            kills: 1,
                                            deaths: 7,
                                            assists: 24,
                                            kda: "3.571",
                                            killParticipation: "67.568",
                                            goldEarned: 7042,
                                            cs: 23,
                                            totalDamageDealt: 12327,
                                            totalDamageTaken: 16268,
                                            wardsPlaced: 21,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 12,
                                            visionScore: 30,
                                            champion: {
                                                id: 412,
                                                name: "쓰레쉬",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Thresh.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8351,
                                                        name: "빙결 강화",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png"
                                                    },
                                                    {
                                                        id: 8306,
                                                        name: "마법공학 점멸기",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png"
                                                    },
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8463,
                                                        name: "생명의 샘",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png"
                                                    },
                                                    {
                                                        id: 8444,
                                                        name: "재생의 바람",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3859,
                                                    name: "타곤 산의 방패",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3859.png"
                                                },
                                                {
                                                    id: 2065,
                                                    name: "슈렐리아의 군가",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2065.png"
                                                },
                                                {
                                                    id: 1029,
                                                    name: "천 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1029.png"
                                                },
                                                {
                                                    id: 3067,
                                                    name: "점화석",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3067.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                null,
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "77GameZting",
                                            id: "l_hbwsZJ1y5hS5zwcYGYHe7_V7S48a9uUliRnnd1ODJihK3n8EGfRioPSw",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 13,
                                            kills: 4,
                                            deaths: 7,
                                            assists: 1,
                                            kda: "0.714",
                                            killParticipation: "31.250",
                                            goldEarned: 9715,
                                            cs: 156,
                                            totalDamageDealt: 112318,
                                            totalDamageTaken: 21247,
                                            wardsPlaced: 8,
                                            wardsKilled: 0,
                                            detectorWardsPlaced: 2,
                                            visionScore: 16,
                                            champion: {
                                                id: 24,
                                                name: "잭스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jax.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8008,
                                                        name: "치명적 속도",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9105,
                                                        name: "전설: 강인함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6632,
                                                    name: "신성한 파괴자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6632.png"
                                                },
                                                {
                                                    id: 2033,
                                                    name: "부패 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2033.png"
                                                },
                                                {
                                                    id: 3123,
                                                    name: "처형인의 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3123.png"
                                                },
                                                {
                                                    id: 3091,
                                                    name: "마법사의 최후",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3091.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 1029,
                                                    name: "천 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1029.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "46A",
                                            id: "3KXLqIXld060d12JcCAad1oa6jRUKxA8LLXwzIo2yyDU-mc1tlZtI0XUmw",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 12,
                                            kills: 5,
                                            deaths: 9,
                                            assists: 4,
                                            kda: "1.000",
                                            killParticipation: "56.250",
                                            goldEarned: 9078,
                                            cs: 29,
                                            totalDamageDealt: 102335,
                                            totalDamageTaken: 30316,
                                            wardsPlaced: 8,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 4,
                                            visionScore: 17,
                                            champion: {
                                                id: 2,
                                                name: "올라프",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Olaf.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                },
                                                {
                                                    id: 6,
                                                    name: "유체화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHaste.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6630,
                                                    name: "선혈포식자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6630.png"
                                                },
                                                {
                                                    id: 1036,
                                                    name: "롱소드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1036.png"
                                                },
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 1036,
                                                    name: "롱소드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1036.png"
                                                },
                                                null,
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Brrain",
                                            id: "6zSF4U5nGnpSFk3Mpe-DMlZtvtD4Ys-XS1dUudfMNhlhNrk",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 11,
                                            kills: 3,
                                            deaths: 6,
                                            assists: 5,
                                            kda: "1.333",
                                            killParticipation: "50.000",
                                            goldEarned: 6678,
                                            cs: 107,
                                            totalDamageDealt: 59151,
                                            totalDamageTaken: 18962,
                                            wardsPlaced: 7,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 4,
                                            visionScore: 14,
                                            champion: {
                                                id: 84,
                                                name: "아칼리",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Akali.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9105,
                                                        name: "전설: 강인함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8444,
                                                        name: "재생의 바람",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png"
                                                    },
                                                    {
                                                        id: 8451,
                                                        name: "과잉성장",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 4633,
                                                    name: "균열 생성기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4633.png"
                                                },
                                                {
                                                    id: 2031,
                                                    name: "충전형 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2031.png"
                                                },
                                                {
                                                    id: 3111,
                                                    name: "헤르메스의 발걸음",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3111.png"
                                                },
                                                {
                                                    id: 1028,
                                                    name: "루비 수정",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1028.png"
                                                },
                                                {
                                                    id: 3916,
                                                    name: "망각의 구",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3916.png"
                                                },
                                                null,
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "ADCGOD 18",
                                            id: "Jkb8-SibsHEOLK_buEWUPs5KJGtaVMIWvN5CYlkHT29J7WWWS8uq0oB0EQ",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 12,
                                            kills: 2,
                                            deaths: 4,
                                            assists: 2,
                                            kda: "1.000",
                                            killParticipation: "25.000",
                                            goldEarned: 8609,
                                            cs: 171,
                                            totalDamageDealt: 102195,
                                            totalDamageTaken: 11019,
                                            wardsPlaced: 7,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 0,
                                            visionScore: 17,
                                            champion: {
                                                id: 81,
                                                name: "이즈리얼",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Ezreal.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 1,
                                                    name: "정화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerBoost.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8369,
                                                        name: "선제공격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
                                                    },
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9103,
                                                        name: "전설: 핏빛 길",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 2031,
                                                    name: "충전형 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2031.png"
                                                },
                                                {
                                                    id: 3508,
                                                    name: "정수 약탈자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3508.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3802,
                                                    name: "사라진 양피지",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3802.png"
                                                },
                                                {
                                                    id: 3042,
                                                    name: "무라마나",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3042.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "소심한데할말다함",
                                            id: "NJrfx-soqn3bDKHh0fPSAbkGCgvhGJxeYQSN6fHtubGy2Tw",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 9,
                                            kills: 2,
                                            deaths: 11,
                                            assists: 7,
                                            kda: "0.818",
                                            killParticipation: "56.250",
                                            goldEarned: 6866,
                                            cs: 13,
                                            totalDamageDealt: 19196,
                                            totalDamageTaken: 13934,
                                            wardsPlaced: 22,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 4,
                                            visionScore: 41,
                                            champion: {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karma.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 3,
                                                    name: "탈진",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerExhaust.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8214,
                                                        name: "콩콩이 소환",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
                                                    },
                                                    {
                                                        id: 8275,
                                                        name: "빛의 망토",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png"
                                                    },
                                                    {
                                                        id: 8210,
                                                        name: "깨달음",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                    },
                                                    {
                                                        id: 8237,
                                                        name: "주문 작열",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Scorch/Scorch.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8313,
                                                        name: "완벽한 타이밍",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3853,
                                                    name: "얼음 정수의 파편",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3853.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 2065,
                                                    name: "슈렐리아의 군가",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2065.png"
                                                },
                                                {
                                                    id: 4642,
                                                    name: "밴들유리 거울",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4642.png"
                                                },
                                                {
                                                    id: 3009,
                                                    name: "신속의 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3009.png"
                                                },
                                                {
                                                    id: 3916,
                                                    name: "망각의 구",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3916.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        }
                                    ],
                                    blueTeam: {
                                        bans: [
                                            {
                                                id: 41,
                                                name: "갱플랭크",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Gangplank.png"
                                            },
                                            {
                                                id: 238,
                                                name: "제드",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Zed.png"
                                            },
                                            {
                                                id: 51,
                                                name: "케이틀린",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Caitlyn.png"
                                            },
                                            {
                                                id: 114,
                                                name: "피오라",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Fiora.png"
                                            },
                                            {
                                                id: 91,
                                                name: "탈론",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Talon.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 37,
                                        dragonKills: 1,
                                        baronKills: 1,
                                        towerKills: 4,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 0
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 64,
                                                name: "리 신",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/LeeSin.png"
                                            },
                                            {
                                                id: 711,
                                                name: "벡스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Vex.png"
                                            },
                                            {
                                                id: 234,
                                                name: "비에고",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Viego.png"
                                            },
                                            {
                                                id: 126,
                                                name: "제이스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jayce.png"
                                            },
                                            {
                                                id: 51,
                                                name: "케이틀린",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Caitlyn.png"
                                            }
                                        ],
                                        win: false,
                                        championKills: 16,
                                        dragonKills: 2,
                                        baronKills: 0,
                                        towerKills: 4,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 2
                                    }
                                },
                                {
                                    id: "KR_5703342514",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642676152109,
                                    gameLength: 1787,
                                    participants: [
                                        {
                                            name: "죽으면서한다",
                                            id: "_TX0v6tt9YTKM2G0jV0cg6vNkoKSVbCE7hhfcZ60YIcTEbk",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 1,
                                            deaths: 7,
                                            assists: 8,
                                            kda: "1.286",
                                            killParticipation: "30.000",
                                            goldEarned: 8394,
                                            cs: 148,
                                            totalDamageDealt: 96446,
                                            totalDamageTaken: 31087,
                                            wardsPlaced: 7,
                                            wardsKilled: 0,
                                            detectorWardsPlaced: 2,
                                            visionScore: 11,
                                            champion: {
                                                id: 517,
                                                name: "사일러스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Sylas.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9105,
                                                        name: "전설: 강인함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6656,
                                                    name: "만년서리",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6656.png"
                                                },
                                                {
                                                    id: 1056,
                                                    name: "도란의 반지",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1056.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 1052,
                                                    name: "증폭의 고서",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1052.png"
                                                },
                                                null,
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "xiaorokq",
                                            id: "w2TnTCXHJkC1IIXxvGDJcceslj-xpUfVc0IpV60fRgYtUG-WeRsO6132Eg",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 9,
                                            deaths: 5,
                                            assists: 14,
                                            kda: "4.600",
                                            killParticipation: "76.667",
                                            goldEarned: 12554,
                                            cs: 28,
                                            totalDamageDealt: 168908,
                                            totalDamageTaken: 38558,
                                            wardsPlaced: 8,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 6,
                                            visionScore: 37,
                                            champion: {
                                                id: 59,
                                                name: "자르반 4세",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/JarvanIV.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3026,
                                                    name: "수호 천사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3026.png"
                                                },
                                                {
                                                    id: 6630,
                                                    name: "선혈포식자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6630.png"
                                                },
                                                {
                                                    id: 1036,
                                                    name: "롱소드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1036.png"
                                                },
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 1037,
                                                    name: "곡괭이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1037.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "난진짜말로안해1",
                                            id: "IVlIV47Yfo7M_zxJAym7Kz7F18jsXItq_QKDZZU8gtdOIleKavSo60t6Hw",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 7,
                                            deaths: 7,
                                            assists: 10,
                                            kda: "2.429",
                                            killParticipation: "56.667",
                                            goldEarned: 12060,
                                            cs: 158,
                                            totalDamageDealt: 87740,
                                            totalDamageTaken: 23016,
                                            wardsPlaced: 11,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 7,
                                            visionScore: 24,
                                            champion: {
                                                id: 7,
                                                name: "르블랑",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Leblanc.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8112,
                                                        name: "감전",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/Electrocute/Electrocute.png"
                                                    },
                                                    {
                                                        id: 8139,
                                                        name: "피의 맛",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
                                                    },
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8106,
                                                        name: "궁극의 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 2033,
                                                    name: "부패 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2033.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 1026,
                                                    name: "방출의 마법봉",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1026.png"
                                                },
                                                {
                                                    id: 3135,
                                                    name: "공허의 지팡이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3135.png"
                                                },
                                                {
                                                    id: 6655,
                                                    name: "루덴의 폭풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6655.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "인생뉴비",
                                            id: "bOOes8Hdg9DGWLnpEuBLeWquvc3OKPpo4DSXVuXipd2iB8o",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 13,
                                            kills: 10,
                                            deaths: 10,
                                            assists: 10,
                                            kda: "2.000",
                                            killParticipation: "66.667",
                                            goldEarned: 12262,
                                            cs: 176,
                                            totalDamageDealt: 123356,
                                            totalDamageTaken: 25996,
                                            wardsPlaced: 7,
                                            wardsKilled: 10,
                                            detectorWardsPlaced: 0,
                                            visionScore: 26,
                                            champion: {
                                                id: 29,
                                                name: "트위치",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Twitch.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 7,
                                                    name: "회복",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHeal.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8005,
                                                        name: "집중 공격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 1055,
                                                    name: "도란의 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1055.png"
                                                },
                                                {
                                                    id: 3006,
                                                    name: "광전사의 군화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3006.png"
                                                },
                                                {
                                                    id: 3153,
                                                    name: "몰락한 왕의 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3153.png"
                                                },
                                                {
                                                    id: 3085,
                                                    name: "루난의 허리케인",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3085.png"
                                                },
                                                {
                                                    id: 6672,
                                                    name: "크라켄 학살자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6672.png"
                                                },
                                                {
                                                    id: 1037,
                                                    name: "곡괭이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1037.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "evil evol",
                                            id: "ZEFvYX0PkCUZTMFKK_X_MvYfhL3hJXBtnUXI0oeW3iIHuV0",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 12,
                                            kills: 3,
                                            deaths: 9,
                                            assists: 21,
                                            kda: "2.667",
                                            killParticipation: "80.000",
                                            goldEarned: 8325,
                                            cs: 9,
                                            totalDamageDealt: 15007,
                                            totalDamageTaken: 15673,
                                            wardsPlaced: 23,
                                            wardsKilled: 1,
                                            detectorWardsPlaced: 4,
                                            visionScore: 40,
                                            champion: {
                                                id: 350,
                                                name: "유미",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Yuumi.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 3,
                                                    name: "탈진",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerExhaust.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8214,
                                                        name: "콩콩이 소환",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png"
                                                    },
                                                    {
                                                        id: 8226,
                                                        name: "마나순환 팔찌",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png"
                                                    },
                                                    {
                                                        id: 8210,
                                                        name: "깨달음",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                    },
                                                    {
                                                        id: 8237,
                                                        name: "주문 작열",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Scorch/Scorch.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 8017,
                                                        name: "체력차 극복",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CutDown/CutDown.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3853,
                                                    name: "얼음 정수의 파편",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3853.png"
                                                },
                                                {
                                                    id: 6617,
                                                    name: "월석 재생기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6617.png"
                                                },
                                                {
                                                    id: 3011,
                                                    name: "화학공학 부패기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3011.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3114,
                                                    name: "금지된 우상",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3114.png"
                                                },
                                                {
                                                    id: 1057,
                                                    name: "음전자 망토",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1057.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "인프피에요",
                                            id: "KEo4LlrLejY07bKh2rcibbaTkyWL5AXLwkGfh8uj112HKxo",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 17,
                                            kills: 6,
                                            deaths: 4,
                                            assists: 17,
                                            kda: "5.750",
                                            killParticipation: "60.526",
                                            goldEarned: 14160,
                                            cs: 204,
                                            totalDamageDealt: 171080,
                                            totalDamageTaken: 33103,
                                            wardsPlaced: 9,
                                            wardsKilled: 1,
                                            detectorWardsPlaced: 4,
                                            visionScore: 28,
                                            champion: {
                                                id: 150,
                                                name: "나르",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Gnar.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8473,
                                                        name: "뼈 방패",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                    },
                                                    {
                                                        id: 8451,
                                                        name: "과잉성장",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3111,
                                                    name: "헤르메스의 발걸음",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3111.png"
                                                },
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 6630,
                                                    name: "선혈포식자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6630.png"
                                                },
                                                {
                                                    id: 4401,
                                                    name: "대자연의 힘",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4401.png"
                                                },
                                                {
                                                    id: 3082,
                                                    name: "파수꾼의 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3082.png"
                                                },
                                                {
                                                    id: 1029,
                                                    name: "천 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1029.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "JUGDOG 12",
                                            id: "3q8AhPpUsqnvK78zhnC4irnZwsDuxdeMup2blpPS8jFkkas",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 17,
                                            kills: 16,
                                            deaths: 2,
                                            assists: 15,
                                            kda: "15.500",
                                            killParticipation: "81.579",
                                            goldEarned: 17075,
                                            cs: 35,
                                            totalDamageDealt: 193530,
                                            totalDamageTaken: 36437,
                                            wardsPlaced: 17,
                                            wardsKilled: 2,
                                            detectorWardsPlaced: 7,
                                            visionScore: 34,
                                            champion: {
                                                id: 64,
                                                name: "리 신",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/LeeSin.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6630,
                                                    name: "선혈포식자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6630.png"
                                                },
                                                {
                                                    id: 6333,
                                                    name: "죽음의 무도",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6333.png"
                                                },
                                                {
                                                    id: 3026,
                                                    name: "수호 천사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3026.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 4401,
                                                    name: "대자연의 힘",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4401.png"
                                                },
                                                null,
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Faith1",
                                            id: "Lj0pJb--HPlHB3EB_dj40IfhkIEmDGWFy1iztuwZF1v-aQ",
                                            isSearchTarget: true,
                                            isBlueTeam: false,
                                            championLevel: 16,
                                            kills: 4,
                                            deaths: 7,
                                            assists: 15,
                                            kda: "2.714",
                                            killParticipation: "50.000",
                                            goldEarned: 11651,
                                            cs: 199,
                                            totalDamageDealt: 140361,
                                            totalDamageTaken: 26584,
                                            wardsPlaced: 7,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 3,
                                            visionScore: 21,
                                            champion: {
                                                id: 38,
                                                name: "카사딘",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Kassadin.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8021,
                                                        name: "기민한 발놀림",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
                                                    },
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9105,
                                                        name: "전설: 강인함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8444,
                                                        name: "재생의 바람",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png"
                                                    },
                                                    {
                                                        id: 8242,
                                                        name: "불굴의 의지",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6656,
                                                    name: "만년서리",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6656.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 1058,
                                                    name: "쓸데없이 큰 지팡이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1058.png"
                                                },
                                                {
                                                    id: 3040,
                                                    name: "대천사의 포옹",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3040.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 1054,
                                                    name: "도란의 방패",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1054.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "mfhz",
                                            id: "xNRZhprFNwMVqYJ2PdMt9R5rLQIRDSau2LsBCVtAy6Jpoio",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 12,
                                            kills: 2,
                                            deaths: 11,
                                            assists: 15,
                                            kda: "1.545",
                                            killParticipation: "44.737",
                                            goldEarned: 8307,
                                            cs: 14,
                                            totalDamageDealt: 18835,
                                            totalDamageTaken: 15839,
                                            wardsPlaced: 41,
                                            wardsKilled: 8,
                                            detectorWardsPlaced: 13,
                                            visionScore: 75,
                                            champion: {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karma.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8229,
                                                        name: "신비로운 유성",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png"
                                                    },
                                                    {
                                                        id: 8275,
                                                        name: "빛의 망토",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png"
                                                    },
                                                    {
                                                        id: 8210,
                                                        name: "깨달음",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                    },
                                                    {
                                                        id: 8237,
                                                        name: "주문 작열",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Scorch/Scorch.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3853,
                                                    name: "얼음 정수의 파편",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3853.png"
                                                },
                                                {
                                                    id: 3011,
                                                    name: "화학공학 부패기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3011.png"
                                                },
                                                {
                                                    id: 2065,
                                                    name: "슈렐리아의 군가",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2065.png"
                                                },
                                                {
                                                    id: 3114,
                                                    name: "금지된 우상",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3114.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "0520520520516",
                                            id: "24SyifUI-9Rno_EGLH39QKqbcfFRHg3N_PaaG0HruP4TS6E",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 15,
                                            kills: 10,
                                            deaths: 6,
                                            assists: 9,
                                            kda: "3.167",
                                            killParticipation: "50.000",
                                            goldEarned: 13746,
                                            cs: 178,
                                            totalDamageDealt: 153754,
                                            totalDamageTaken: 18268,
                                            wardsPlaced: 11,
                                            wardsKilled: 7,
                                            detectorWardsPlaced: 4,
                                            visionScore: 35,
                                            champion: {
                                                id: 202,
                                                name: "진",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jhin.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 7,
                                                    name: "회복",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHeal.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8021,
                                                        name: "기민한 발놀림",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
                                                    },
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9103,
                                                        name: "전설: 핏빛 길",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 2031,
                                                    name: "충전형 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2031.png"
                                                },
                                                {
                                                    id: 6671,
                                                    name: "돌풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6671.png"
                                                },
                                                {
                                                    id: 3036,
                                                    name: "도미닉 경의 인사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3036.png"
                                                },
                                                {
                                                    id: 6676,
                                                    name: "징수의 총",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6676.png"
                                                },
                                                {
                                                    id: 3094,
                                                    name: "고속 연사포",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3094.png"
                                                },
                                                {
                                                    id: 3009,
                                                    name: "신속의 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3009.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        }
                                    ],
                                    blueTeam: {
                                        bans: [
                                            {
                                                id: 91,
                                                name: "탈론",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Talon.png"
                                            },
                                            {
                                                id: 42,
                                                name: "코르키",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Corki.png"
                                            },
                                            {
                                                id: 222,
                                                name: "징크스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jinx.png"
                                            },
                                            {
                                                id: 99,
                                                name: "럭스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Lux.png"
                                            },
                                            {
                                                id: 41,
                                                name: "갱플랭크",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Gangplank.png"
                                            }
                                        ],
                                        win: false,
                                        championKills: 30,
                                        dragonKills: 1,
                                        baronKills: 0,
                                        towerKills: 3,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 1
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 238,
                                                name: "제드",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Zed.png"
                                            },
                                            {
                                                id: 30,
                                                name: "카서스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karthus.png"
                                            },
                                            {
                                                id: 126,
                                                name: "제이스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jayce.png"
                                            },
                                            {
                                                id: 120,
                                                name: "헤카림",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Hecarim.png"
                                            },
                                            {
                                                id: 164,
                                                name: "카밀",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Camille.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 38,
                                        dragonKills: 3,
                                        baronKills: 1,
                                        towerKills: 8,
                                        inhibitorKills: 1,
                                        riftHeraldKills: 1
                                    }
                                },
                                {
                                    id: "KR_5703325996",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642673740636,
                                    gameLength: 1994,
                                    participants: [
                                        {
                                            name: "Aredbb",
                                            id: "1kf_0W_75GczOIR5Zv_TLEBBqDYtA2xutveYyjlDqVWDBJUobr2SVAEjzQ",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 17,
                                            kills: 7,
                                            deaths: 7,
                                            assists: 2,
                                            kda: "1.286",
                                            killParticipation: "23.684",
                                            goldEarned: 13335,
                                            cs: 244,
                                            totalDamageDealt: 177541,
                                            totalDamageTaken: 42728,
                                            wardsPlaced: 15,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 7,
                                            visionScore: 38,
                                            champion: {
                                                id: 164,
                                                name: "카밀",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Camille.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8437,
                                                        name: "착취의 손아귀",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png"
                                                    },
                                                    {
                                                        id: 8401,
                                                        name: "보호막 강타",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png"
                                                    },
                                                    {
                                                        id: 8473,
                                                        name: "뼈 방패",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                    },
                                                    {
                                                        id: 8242,
                                                        name: "불굴의 의지",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 2421,
                                                    name: "망가진 초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2421.png"
                                                },
                                                {
                                                    id: 3074,
                                                    name: "굶주린 히드라",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3074.png"
                                                },
                                                {
                                                    id: 3123,
                                                    name: "처형인의 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3123.png"
                                                },
                                                {
                                                    id: 6632,
                                                    name: "신성한 파괴자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6632.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "나 정해성",
                                            id: "vRQ0KQHrz8pRDJmBSg8xbavKoiX3uUv2p8ctp64T7ZQ5_hk7mCh7RCs1YA",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 18,
                                            kills: 10,
                                            deaths: 9,
                                            assists: 8,
                                            kda: "2.000",
                                            killParticipation: "47.368",
                                            goldEarned: 15589,
                                            cs: 84,
                                            totalDamageDealt: 259719,
                                            totalDamageTaken: 46263,
                                            wardsPlaced: 4,
                                            wardsKilled: 6,
                                            detectorWardsPlaced: 2,
                                            visionScore: 27,
                                            champion: {
                                                id: 876,
                                                name: "릴리아",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Lillia.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8128,
                                                        name: "어둠의 수확",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
                                                    },
                                                    {
                                                        id: 8126,
                                                        name: "비열한 한 방",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/CheapShot/CheapShot.png"
                                                    },
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8275,
                                                        name: "빛의 망토",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/NimbusCloak/6361.png"
                                                    },
                                                    {
                                                        id: 8210,
                                                        name: "깨달음",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6653,
                                                    name: "리안드리의 고뇌",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6653.png"
                                                },
                                                {
                                                    id: 3116,
                                                    name: "라일라이의 수정홀",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3116.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 4629,
                                                    name: "우주의 추진력",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4629.png"
                                                },
                                                {
                                                    id: 3041,
                                                    name: "메자이의 영혼약탈자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3041.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "sdfgabjnklasgdfn",
                                            id: "MYWSsKxG0zPOSXp6IFvMWudQhFm7G1CNI5Pb8I235N94WeYdbQQQLeKiKw",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 16,
                                            kills: 9,
                                            deaths: 5,
                                            assists: 6,
                                            kda: "3.000",
                                            killParticipation: "39.474",
                                            goldEarned: 13200,
                                            cs: 192,
                                            totalDamageDealt: 141493,
                                            totalDamageTaken: 30267,
                                            wardsPlaced: 5,
                                            wardsKilled: 8,
                                            detectorWardsPlaced: 3,
                                            visionScore: 29,
                                            champion: {
                                                id: 7,
                                                name: "르블랑",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Leblanc.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8112,
                                                        name: "감전",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/Electrocute/Electrocute.png"
                                                    },
                                                    {
                                                        id: 8139,
                                                        name: "피의 맛",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
                                                    },
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 1058,
                                                    name: "쓸데없이 큰 지팡이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1058.png"
                                                },
                                                {
                                                    id: 3165,
                                                    name: "모렐로노미콘",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3165.png"
                                                },
                                                {
                                                    id: 3135,
                                                    name: "공허의 지팡이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3135.png"
                                                },
                                                {
                                                    id: 6655,
                                                    name: "루덴의 폭풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6655.png"
                                                },
                                                {
                                                    id: 3145,
                                                    name: "마법공학 교류 발전기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3145.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "qwertyuioasd",
                                            id: "ZUqLx8c6oxKqX01nVPYLZPmMg6npMyUyrb0gmiKJo5gmeycc6uxeGo3_ow",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 16,
                                            kills: 8,
                                            deaths: 8,
                                            assists: 4,
                                            kda: "1.500",
                                            killParticipation: "31.579",
                                            goldEarned: 14784,
                                            cs: 222,
                                            totalDamageDealt: 207043,
                                            totalDamageTaken: 29691,
                                            wardsPlaced: 9,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 0,
                                            visionScore: 22,
                                            champion: {
                                                id: 360,
                                                name: "사미라",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Samira.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 1,
                                                    name: "정화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerBoost.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9103,
                                                        name: "전설: 핏빛 길",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6676,
                                                    name: "징수의 총",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6676.png"
                                                },
                                                {
                                                    id: 6673,
                                                    name: "불멸의 철갑궁",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6673.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 3031,
                                                    name: "무한의 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3031.png"
                                                },
                                                {
                                                    id: 3036,
                                                    name: "도미닉 경의 인사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3036.png"
                                                },
                                                {
                                                    id: 1055,
                                                    name: "도란의 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1055.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "탈진써줄게",
                                            id: "q5SuMpDU1WEP3ixRpNTOuSgd95X4czgfOJJBJCFff7AoXw",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 13,
                                            kills: 4,
                                            deaths: 6,
                                            assists: 8,
                                            kda: "2.000",
                                            killParticipation: "31.579",
                                            goldEarned: 8212,
                                            cs: 36,
                                            totalDamageDealt: 19377,
                                            totalDamageTaken: 24030,
                                            wardsPlaced: 41,
                                            wardsKilled: 9,
                                            detectorWardsPlaced: 16,
                                            visionScore: 71,
                                            champion: {
                                                id: 53,
                                                name: "블리츠크랭크",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Blitzcrank.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8439,
                                                        name: "여진",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
                                                    },
                                                    {
                                                        id: 8463,
                                                        name: "생명의 샘",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png"
                                                    },
                                                    {
                                                        id: 8473,
                                                        name: "뼈 방패",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                    },
                                                    {
                                                        id: 8242,
                                                        name: "불굴의 의지",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8306,
                                                        name: "마법공학 점멸기",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3075,
                                                    name: "가시 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3075.png"
                                                },
                                                {
                                                    id: 2065,
                                                    name: "슈렐리아의 군가",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2065.png"
                                                },
                                                {
                                                    id: 3857,
                                                    name: "화이트록의 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3857.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                null,
                                                {
                                                    id: 3117,
                                                    name: "기동력의 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3117.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "김눌엉",
                                            id: "azsmY0gJqe1qoQlWf8Hx9BC9N1Zmt_Hz39DnG-eX56bKoQ",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 18,
                                            kills: 5,
                                            deaths: 3,
                                            assists: 6,
                                            kda: "3.667",
                                            killParticipation: "31.429",
                                            goldEarned: 14778,
                                            cs: 257,
                                            totalDamageDealt: 204483,
                                            totalDamageTaken: 30932,
                                            wardsPlaced: 13,
                                            wardsKilled: 1,
                                            detectorWardsPlaced: 2,
                                            visionScore: 24,
                                            champion: {
                                                id: 92,
                                                name: "리븐",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Riven.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6630,
                                                    name: "선혈포식자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6630.png"
                                                },
                                                {
                                                    id: 3071,
                                                    name: "칠흑의 양날 도끼",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3071.png"
                                                },
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 3026,
                                                    name: "수호 천사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3026.png"
                                                },
                                                null,
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "훌쩌규",
                                            id: "LPcM96rOg5P91DKki2170LtrL3e-rTdXSSuvhlsCLdU0pZw",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 17,
                                            kills: 12,
                                            deaths: 11,
                                            assists: 12,
                                            kda: "2.182",
                                            killParticipation: "68.571",
                                            goldEarned: 14821,
                                            cs: 29,
                                            totalDamageDealt: 169437,
                                            totalDamageTaken: 36855,
                                            wardsPlaced: 7,
                                            wardsKilled: 10,
                                            detectorWardsPlaced: 6,
                                            visionScore: 42,
                                            champion: {
                                                id: 107,
                                                name: "렝가",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Rengar.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3142,
                                                    name: "요우무의 유령검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3142.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3508,
                                                    name: "정수 약탈자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3508.png"
                                                },
                                                {
                                                    id: 3156,
                                                    name: "맬모셔스의 아귀",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3156.png"
                                                },
                                                {
                                                    id: 6691,
                                                    name: "드락사르의 황혼검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6691.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Faith1",
                                            id: "Lj0pJb--HPlHB3EB_dj40IfhkIEmDGWFy1iztuwZF1v-aQ",
                                            isSearchTarget: true,
                                            isBlueTeam: false,
                                            championLevel: 17,
                                            kills: 5,
                                            deaths: 8,
                                            assists: 9,
                                            kda: "1.750",
                                            killParticipation: "40.000",
                                            goldEarned: 14603,
                                            cs: 227,
                                            totalDamageDealt: 167820,
                                            totalDamageTaken: 20091,
                                            wardsPlaced: 16,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 5,
                                            visionScore: 38,
                                            champion: {
                                                id: 42,
                                                name: "코르키",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Corki.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8369,
                                                        name: "선제공격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
                                                    },
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8473,
                                                        name: "뼈 방패",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                    },
                                                    {
                                                        id: 8242,
                                                        name: "불굴의 의지",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3074,
                                                    name: "굶주린 히드라",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3074.png"
                                                },
                                                {
                                                    id: 3156,
                                                    name: "맬모셔스의 아귀",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3156.png"
                                                },
                                                {
                                                    id: 1036,
                                                    name: "롱소드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1036.png"
                                                },
                                                {
                                                    id: 3042,
                                                    name: "무라마나",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3042.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 6655,
                                                    name: "루덴의 폭풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6655.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "OnOnOnOnOnOnOnO",
                                            id: "qb4_JdmnKyADjs1vUq3k4K3F0Ht0fbHDGXFgo1OEBbFlA3iP1f9jRVBvow",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 18,
                                            kills: 7,
                                            deaths: 7,
                                            assists: 6,
                                            kda: "1.857",
                                            killParticipation: "37.143",
                                            goldEarned: 17199,
                                            cs: 275,
                                            totalDamageDealt: 257397,
                                            totalDamageTaken: 17586,
                                            wardsPlaced: 13,
                                            wardsKilled: 7,
                                            detectorWardsPlaced: 2,
                                            visionScore: 31,
                                            champion: {
                                                id: 81,
                                                name: "이즈리얼",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Ezreal.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 7,
                                                    name: "회복",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHeal.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8369,
                                                        name: "선제공격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
                                                    },
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9103,
                                                        name: "전설: 핏빛 길",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3140,
                                                    name: "수은 장식띠",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3140.png"
                                                },
                                                {
                                                    id: 4644,
                                                    name: "부서진 여왕의 왕관",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4644.png"
                                                },
                                                {
                                                    id: 6694,
                                                    name: "세릴다의 원한",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6694.png"
                                                },
                                                {
                                                    id: 3508,
                                                    name: "정수 약탈자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3508.png"
                                                },
                                                {
                                                    id: 3042,
                                                    name: "무라마나",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3042.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "S벨코즈",
                                            id: "EUtOGtdsZu3-LGW-aY_AHlzv0bv8oqk10nomELCFbR6gmw",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 14,
                                            kills: 6,
                                            deaths: 9,
                                            assists: 6,
                                            kda: "1.333",
                                            killParticipation: "34.286",
                                            goldEarned: 11278,
                                            cs: 49,
                                            totalDamageDealt: 65842,
                                            totalDamageTaken: 16044,
                                            wardsPlaced: 47,
                                            wardsKilled: 10,
                                            detectorWardsPlaced: 12,
                                            visionScore: 89,
                                            champion: {
                                                id: 161,
                                                name: "벨코즈",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Velkoz.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8128,
                                                        name: "어둠의 수확",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
                                                    },
                                                    {
                                                        id: 8139,
                                                        name: "피의 맛",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
                                                    },
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8106,
                                                        name: "궁극의 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8226,
                                                        name: "마나순환 팔찌",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png"
                                                    },
                                                    {
                                                        id: 8210,
                                                        name: "깨달음",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                null,
                                                {
                                                    id: 3102,
                                                    name: "밴시의 장막",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3102.png"
                                                },
                                                {
                                                    id: 3853,
                                                    name: "얼음 정수의 파편",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3853.png"
                                                },
                                                {
                                                    id: 6653,
                                                    name: "리안드리의 고뇌",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6653.png"
                                                },
                                                {
                                                    id: 3916,
                                                    name: "망각의 구",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3916.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        }
                                    ],
                                    blueTeam: {
                                        bans: [
                                            {
                                                id: 131,
                                                name: "다이애나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Diana.png"
                                            },
                                            {
                                                id: 24,
                                                name: "잭스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jax.png"
                                            },
                                            {
                                                id: 350,
                                                name: "유미",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Yuumi.png"
                                            },
                                            null,
                                            null
                                        ],
                                        win: false,
                                        championKills: 38,
                                        dragonKills: 1,
                                        baronKills: 0,
                                        towerKills: 4,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 2
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 35,
                                                name: "샤코",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Shaco.png"
                                            },
                                            {
                                                id: 555,
                                                name: "파이크",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Pyke.png"
                                            },
                                            {
                                                id: 126,
                                                name: "제이스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jayce.png"
                                            },
                                            {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karma.png"
                                            },
                                            {
                                                id: 64,
                                                name: "리 신",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/LeeSin.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 35,
                                        dragonKills: 3,
                                        baronKills: 1,
                                        towerKills: 8,
                                        inhibitorKills: 1,
                                        riftHeraldKills: 0
                                    }
                                },
                                {
                                    id: "KR_5703169935",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642671025635,
                                    gameLength: 2296,
                                    participants: [
                                        {
                                            name: "뿌박탑",
                                            id: "wolgNyE0_5V9DzxSJy2ORILvxKoMHGtbnQqkGSducalyC6T7IPNIpnToKA",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 18,
                                            kills: 5,
                                            deaths: 8,
                                            assists: 8,
                                            kda: "1.625",
                                            killParticipation: "46.429",
                                            goldEarned: 16375,
                                            cs: 228,
                                            totalDamageDealt: 187522,
                                            totalDamageTaken: 29276,
                                            wardsPlaced: 8,
                                            wardsKilled: 8,
                                            detectorWardsPlaced: 1,
                                            visionScore: 32,
                                            champion: {
                                                id: 122,
                                                name: "다리우스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Darius.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 6,
                                                    name: "유체화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHaste.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8008,
                                                        name: "치명적 속도",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8473,
                                                        name: "뼈 방패",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                    },
                                                    {
                                                        id: 8242,
                                                        name: "불굴의 의지",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6333,
                                                    name: "죽음의 무도",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6333.png"
                                                },
                                                {
                                                    id: 3076,
                                                    name: "덤불 조끼",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3076.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 3078,
                                                    name: "삼위일체",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3078.png"
                                                },
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 4401,
                                                    name: "대자연의 힘",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4401.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "DWG BoxMaker",
                                            id: "5cql8941olY96E98Fbq3rDjC05K0RKZt8TBxmxW9_jRsoA",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 17,
                                            kills: 6,
                                            deaths: 3,
                                            assists: 11,
                                            kda: "5.667",
                                            killParticipation: "60.714",
                                            goldEarned: 16163,
                                            cs: 36,
                                            totalDamageDealt: 204062,
                                            totalDamageTaken: 25350,
                                            wardsPlaced: 10,
                                            wardsKilled: 13,
                                            detectorWardsPlaced: 6,
                                            visionScore: 38,
                                            champion: {
                                                id: 35,
                                                name: "샤코",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Shaco.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                },
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8369,
                                                        name: "선제공격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
                                                    },
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8321,
                                                        name: "외상",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png"
                                                    },
                                                    {
                                                        id: 8410,
                                                        name: "쾌속 접근",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8138,
                                                        name: "사냥의 증표",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png"
                                                    },
                                                    {
                                                        id: 8105,
                                                        name: "끈질긴 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6653,
                                                    name: "리안드리의 고뇌",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6653.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 4629,
                                                    name: "우주의 추진력",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4629.png"
                                                },
                                                null,
                                                {
                                                    id: 3165,
                                                    name: "모렐로노미콘",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3165.png"
                                                },
                                                {
                                                    id: 3116,
                                                    name: "라일라이의 수정홀",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3116.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "yanoabo",
                                            id: "8MRTi03SjN23pPt-sCRBrX22_AipClM80WpRlEv_dF6OaadUT9BXNASrAg",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 18,
                                            kills: 9,
                                            deaths: 6,
                                            assists: 6,
                                            kda: "2.500",
                                            killParticipation: "53.571",
                                            goldEarned: 19286,
                                            cs: 301,
                                            totalDamageDealt: 263499,
                                            totalDamageTaken: 19023,
                                            wardsPlaced: 15,
                                            wardsKilled: 13,
                                            detectorWardsPlaced: 2,
                                            visionScore: 39,
                                            champion: {
                                                id: 81,
                                                name: "이즈리얼",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Ezreal.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 1,
                                                    name: "정화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerBoost.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8369,
                                                        name: "선제공격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
                                                    },
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9103,
                                                        name: "전설: 핏빛 길",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3042,
                                                    name: "무라마나",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3042.png"
                                                },
                                                {
                                                    id: 3508,
                                                    name: "정수 약탈자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3508.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 6694,
                                                    name: "세릴다의 원한",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6694.png"
                                                },
                                                {
                                                    id: 4644,
                                                    name: "부서진 여왕의 왕관",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4644.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Faith1",
                                            id: "Lj0pJb--HPlHB3EB_dj40IfhkIEmDGWFy1iztuwZF1v-aQ",
                                            isSearchTarget: true,
                                            isBlueTeam: true,
                                            championLevel: 18,
                                            kills: 8,
                                            deaths: 3,
                                            assists: 11,
                                            kda: "6.333",
                                            killParticipation: "67.857",
                                            goldEarned: 19055,
                                            cs: 315,
                                            totalDamageDealt: 310213,
                                            totalDamageTaken: 20627,
                                            wardsPlaced: 18,
                                            wardsKilled: 20,
                                            detectorWardsPlaced: 5,
                                            visionScore: 55,
                                            champion: {
                                                id: 42,
                                                name: "코르키",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Corki.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 12,
                                                    name: "순간이동",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerTeleport.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8369,
                                                        name: "선제공격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png"
                                                    },
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8444,
                                                        name: "재생의 바람",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/SecondWind/SecondWind.png"
                                                    },
                                                    {
                                                        id: 8242,
                                                        name: "불굴의 의지",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3074,
                                                    name: "굶주린 히드라",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3074.png"
                                                },
                                                {
                                                    id: 6655,
                                                    name: "루덴의 폭풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6655.png"
                                                },
                                                {
                                                    id: 6333,
                                                    name: "죽음의 무도",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6333.png"
                                                },
                                                {
                                                    id: 3156,
                                                    name: "맬모셔스의 아귀",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3156.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3042,
                                                    name: "무라마나",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3042.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "떡상할게",
                                            id: "3SM7CD4wulQhpK0rZ-UYLZfHxE1JKwSKPrhXVFSyV3rAm6s",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 15,
                                            kills: 0,
                                            deaths: 10,
                                            assists: 13,
                                            kda: "1.300",
                                            killParticipation: "46.429",
                                            goldEarned: 9109,
                                            cs: 48,
                                            totalDamageDealt: 31036,
                                            totalDamageTaken: 25470,
                                            wardsPlaced: 69,
                                            wardsKilled: 20,
                                            detectorWardsPlaced: 18,
                                            visionScore: 98,
                                            champion: {
                                                id: 89,
                                                name: "레오나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Leona.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8439,
                                                        name: "여진",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png"
                                                    },
                                                    {
                                                        id: 8463,
                                                        name: "생명의 샘",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/FontOfLife/FontOfLife.png"
                                                    },
                                                    {
                                                        id: 8473,
                                                        name: "뼈 방패",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                    },
                                                    {
                                                        id: 8242,
                                                        name: "불굴의 의지",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Unflinching/Unflinching.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8316,
                                                        name: "미니언 해체분석기",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3857,
                                                    name: "화이트록의 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3857.png"
                                                },
                                                {
                                                    id: 3075,
                                                    name: "가시 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3075.png"
                                                },
                                                null,
                                                {
                                                    id: 3001,
                                                    name: "저녁갑주",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3001.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                null,
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "에 넥",
                                            id: "i2ni4c39POTGIg2_wlVi3lbuZjjLgUurVU9Or3zhoZKIy5c",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 17,
                                            kills: 1,
                                            deaths: 6,
                                            assists: 14,
                                            kda: "2.500",
                                            killParticipation: "50.000",
                                            goldEarned: 12580,
                                            cs: 206,
                                            totalDamageDealt: 162968,
                                            totalDamageTaken: 47583,
                                            wardsPlaced: 11,
                                            wardsKilled: 6,
                                            detectorWardsPlaced: 5,
                                            visionScore: 37,
                                            champion: {
                                                id: 58,
                                                name: "레넥톤",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Renekton.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
                                                    },
                                                    {
                                                        id: 8299,
                                                        name: "최후의 저항",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8446,
                                                        name: "철거",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Demolish/Demolish.png"
                                                    },
                                                    {
                                                        id: 8473,
                                                        name: "뼈 방패",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 3065,
                                                    name: "정령의 형상",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3065.png"
                                                },
                                                {
                                                    id: 6630,
                                                    name: "선혈포식자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6630.png"
                                                },
                                                {
                                                    id: 1033,
                                                    name: "마법무효화의 망토",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1033.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 1029,
                                                    name: "천 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1029.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "하뭉이내끄",
                                            id: "xujpxMVl2eayF2o3ANXwr91l-XDbHOLbKLQSL_6e_RMo8Io",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 17,
                                            kills: 9,
                                            deaths: 4,
                                            assists: 10,
                                            kda: "4.750",
                                            killParticipation: "63.333",
                                            goldEarned: 15954,
                                            cs: 78,
                                            totalDamageDealt: 237550,
                                            totalDamageTaken: 47951,
                                            wardsPlaced: 20,
                                            wardsKilled: 14,
                                            detectorWardsPlaced: 7,
                                            visionScore: 50,
                                            champion: {
                                                id: 64,
                                                name: "리 신",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/LeeSin.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9105,
                                                        name: "전설: 강인함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8304,
                                                        name: "마법의 신발",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                                                    },
                                                    {
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 6630,
                                                    name: "선혈포식자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6630.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3111,
                                                    name: "헤르메스의 발걸음",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3111.png"
                                                },
                                                {
                                                    id: 6333,
                                                    name: "죽음의 무도",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6333.png"
                                                },
                                                {
                                                    id: 3065,
                                                    name: "정령의 형상",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3065.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "2002mid",
                                            id: "gfY2A6s93aJJbUeL2guwpvPgrEJikHp4DwPCSu-gf_PKidg",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 18,
                                            kills: 9,
                                            deaths: 6,
                                            assists: 6,
                                            kda: "2.500",
                                            killParticipation: "50.000",
                                            goldEarned: 15026,
                                            cs: 263,
                                            totalDamageDealt: 212439,
                                            totalDamageTaken: 23719,
                                            wardsPlaced: 14,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 3,
                                            visionScore: 31,
                                            champion: {
                                                id: 134,
                                                name: "신드라",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Syndra.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                },
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8112,
                                                        name: "감전",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/Electrocute/Electrocute.png"
                                                    },
                                                    {
                                                        id: 8139,
                                                        name: "피의 맛",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"
                                                    },
                                                    {
                                                        id: 8120,
                                                        name: "유령 포로",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/GhostPoro/GhostPoro.png"
                                                    },
                                                    {
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3089,
                                                    name: "라바돈의 죽음모자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3089.png"
                                                },
                                                null,
                                                {
                                                    id: 3135,
                                                    name: "공허의 지팡이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3135.png"
                                                },
                                                {
                                                    id: 4645,
                                                    name: "그림자불꽃",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4645.png"
                                                },
                                                {
                                                    id: 6655,
                                                    name: "루덴의 폭풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6655.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "화가 나요 안나요",
                                            id: "UaOhydSrxpJghMzrv2Sj6xlFnYyDNdLoY7R9EsWqyC9dCSE",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 18,
                                            kills: 10,
                                            deaths: 4,
                                            assists: 8,
                                            kda: "4.500",
                                            killParticipation: "60.000",
                                            goldEarned: 16898,
                                            cs: 270,
                                            totalDamageDealt: 261665,
                                            totalDamageTaken: 21044,
                                            wardsPlaced: 11,
                                            wardsKilled: 1,
                                            detectorWardsPlaced: 3,
                                            visionScore: 23,
                                            champion: {
                                                id: 202,
                                                name: "진",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Jhin.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 7,
                                                    name: "회복",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHeal.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8021,
                                                        name: "기민한 발놀림",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
                                                    },
                                                    {
                                                        id: 8009,
                                                        name: "침착",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png"
                                                    },
                                                    {
                                                        id: 9103,
                                                        name: "전설: 핏빛 길",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8345,
                                                        name: "비스킷 배달",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"
                                                    },
                                                    {
                                                        id: 8352,
                                                        name: "시간 왜곡 물약",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6671,
                                                    name: "돌풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6671.png"
                                                },
                                                {
                                                    id: 3031,
                                                    name: "무한의 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3031.png"
                                                },
                                                {
                                                    id: 1037,
                                                    name: "곡괭이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1037.png"
                                                },
                                                {
                                                    id: 3094,
                                                    name: "고속 연사포",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3094.png"
                                                },
                                                {
                                                    id: 3036,
                                                    name: "도미닉 경의 인사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3036.png"
                                                },
                                                {
                                                    id: 3009,
                                                    name: "신속의 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3009.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "ALLlinerrr",
                                            id: "QlyciT3M_ODTP0frumPVHD8sPSCq-WzqdoM46Pizzbm5DKI",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 13,
                                            kills: 1,
                                            deaths: 8,
                                            assists: 11,
                                            kda: "1.500",
                                            killParticipation: "40.000",
                                            goldEarned: 9332,
                                            cs: 67,
                                            totalDamageDealt: 42250,
                                            totalDamageTaken: 25928,
                                            wardsPlaced: 101,
                                            wardsKilled: 35,
                                            detectorWardsPlaced: 18,
                                            visionScore: 180,
                                            champion: {
                                                id: 80,
                                                name: "판테온",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Pantheon.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
                                                }
                                            ],
                                            mainPerks: {
                                                style: {
                                                    id: 8000,
                                                    name: "정밀",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7201_Precision.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8010,
                                                        name: "정복자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Conqueror/Conqueror.png"
                                                    },
                                                    {
                                                        id: 9111,
                                                        name: "승전보",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/Triumph.png"
                                                    },
                                                    {
                                                        id: 9105,
                                                        name: "전설: 강인함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png"
                                                    },
                                                    {
                                                        id: 8014,
                                                        name: "최후의 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
                                                    }
                                                ]
                                            },
                                            subPerks: {
                                                style: {
                                                    id: 8100,
                                                    name: "지배",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7200_Domination.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8136,
                                                        name: "좀비 와드",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/ZombieWard/ZombieWard.png"
                                                    },
                                                    {
                                                        id: 8105,
                                                        name: "끈질긴 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3179,
                                                    name: "그림자 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3179.png"
                                                },
                                                {
                                                    id: 3857,
                                                    name: "화이트록의 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3857.png"
                                                },
                                                {
                                                    id: 3123,
                                                    name: "처형인의 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3123.png"
                                                },
                                                {
                                                    id: 6695,
                                                    name: "독사의 송곳니",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6695.png"
                                                },
                                                {
                                                    id: 3117,
                                                    name: "기동력의 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3117.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        }
                                    ],
                                    blueTeam: {
                                        bans: [
                                            {
                                                id: 30,
                                                name: "카서스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karthus.png"
                                            },
                                            {
                                                id: 41,
                                                name: "갱플랭크",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Gangplank.png"
                                            },
                                            {
                                                id: 166,
                                                name: "아크샨",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Akshan.png"
                                            },
                                            {
                                                id: 104,
                                                name: "그레이브즈",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Graves.png"
                                            },
                                            {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Karma.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 28,
                                        dragonKills: 4,
                                        baronKills: 2,
                                        towerKills: 10,
                                        inhibitorKills: 1,
                                        riftHeraldKills: 2
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 85,
                                                name: "케넨",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Kennen.png"
                                            },
                                            {
                                                id: 711,
                                                name: "벡스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Vex.png"
                                            },
                                            {
                                                id: 246,
                                                name: "키아나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Qiyana.png"
                                            },
                                            {
                                                id: 166,
                                                name: "아크샨",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Akshan.png"
                                            },
                                            null
                                        ],
                                        win: false,
                                        championKills: 30,
                                        dragonKills: 2,
                                        baronKills: 0,
                                        towerKills: 3,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 0
                                    }
                                }
                            ]
                        }

                    }
                };
                // setUser(false);
                setUser(response.data.user);
                // const response = await axios.get(`/summoner/${username}`);
                // console.log(response.data);
                // if (response.data.result) {
                //     setUser(response.data);
                //     //have to fetch user matches
                // } else {
                //     setUser(response.data.result);
                // }

            } catch (error) {
                console.log(error);
            }
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchUser();
    }, [])
    console.log(user);
    return loading ? (
        <Loader />
    ) : (
        <>
            {user && (
                <>
                    <UserProfile
                        name={user.name}
                        profileIcon={user.profileIcon}
                        summonerLevel={user.summonerLevel}
                        refresh={fetchUser}
                    />
                    <UserTiers
                        tiers={user.tiers}
                    />
                    <CurrentMatch match={user.currentMatch} />
                    {/* <div className='tiers-container'>
                        <UserTier
                            isSolo={true}
                            {...user.tiers.solo}
                        />
                        <UserTier
                            isSolo={false}
                            {...user.tiers.team}
                        />
                    </div> */}
                </>
            )}
            {user === false && (
                <StatusMessage text="오류가 발생했습니다." />
            )}
            {user === null && (
                <StatusMessage text="소환사 정보를 찾을 수 없습니다." />
            )}
        </>
    )
}

export default Histories;