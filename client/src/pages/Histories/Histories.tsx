import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                        user: {
                            name: "구여름",
                            profileIcon: "http://127.0.0.1:4000/static/img/profileicon/3376.png",
                            accountId: "dbFseOeexoyAf2i7nohC3OCITgwCR1YhRLnIvpuoMSDqBoHsKuCbFKO9",
                            id: "uZjG_181-GMK0I2dPUIGqwwzWh3k5boxcNiGOAxUeRJjXsc",
                            puuid: "_6Ef_tei-zC0thm9IEQ0_Ot-N5lTooYf_rTW-azriNN8DJKak1zRJhHnD6nDcfTGbD7sFWT-IUGq1A",
                            summonerLevel: 268,
                            tiers: {
                                solo: {
                                    tier: "MASTER",
                                    tierImage: "http://127.0.0.1:4000/static/img/tiers/MASTER.png",
                                    rank: "I",
                                    leaguePoints: 35,
                                    wins: 88,
                                    losses: 69
                                },
                                team: {
                                    tier: "UNRANKED",
                                    tierImage: "http://127.0.0.1:4000/static/img/tiers/UNRANKED.png"
                                }
                            },
                            currentMatch: {
                                id: "5701356756",
                                gameMode: "솔랭",
                                gameStartTime: 1642586232268,
                                gameLength: 700,
                                participants: [
                                    {
                                        name: "송강대 서강",
                                        id: "xQBOeE0_u_rPgkEbsD4kZI7QWnZOlu2aRS1SeqyVb0woRtO0zxRpbHQrLA",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 517,
                                            name: "사일러스",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/517.png"
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
                                        name: "T1 Dal",
                                        id: "9RvrGFVVOXWW4YZOxEydwGqEsKQmg6hEmQt2Kd1pHFbgJ0U",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 23,
                                            name: "트린다미어",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/23.png"
                                        },
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
                                        summonerSpells: [
                                            {
                                                id: 6,
                                                name: "유체화",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHaste.png"
                                            },
                                            {
                                                id: 4,
                                                name: "점멸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                            }
                                        ]
                                    },
                                    {
                                        name: "Last Summer",
                                        id: "Qtc76HibOvmXUTkWIpHY7-hOJIKF_1OKJD2l7jr-t_uvoi4",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 89,
                                            name: "레오나",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/89.png"
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
                                                    id: 8306,
                                                    name: "마법공학 점멸기",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png"
                                                },
                                                {
                                                    id: 8316,
                                                    name: "미니언 해체분석기",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
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
                                                    id: 8473,
                                                    name: "뼈 방패",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
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
                                        name: "유튜브 야망",
                                        id: "zVCqGjnfxmch-deDNgdcTJnZ7PP_oT8erR_3veMTrqT15R8a-k6ouLADyQ",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 91,
                                            name: "탈론",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/91.png"
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
                                                    id: 8321,
                                                    name: "외상",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png"
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
                                        ]
                                    },
                                    {
                                        name: "KT UP",
                                        id: "neJOLELpxGazWG9sjniaNfy32rckCqwLX8kCloqKrgOeTxs",
                                        isSearchTarget: false,
                                        isBlueTeam: true,
                                        champion: {
                                            id: 202,
                                            name: "진",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/202.png"
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
                                        ]
                                    },
                                    {
                                        name: "댕 써",
                                        id: "NzM4HzM0caQOnM-d30f6X8OCzaNebcPhG8jMLkAUdLvlog",
                                        isSearchTarget: false,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 78,
                                            name: "뽀삐",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/78.png"
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
                                        name: "bush on Alice ",
                                        id: "pjdgBMq8k4gKMqdMQlb8hI6N4MiI30IGUy3ME-mzxw1NuQg",
                                        isSearchTarget: false,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 60,
                                            name: "엘리스",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/60.png"
                                        },
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
                                                    id: 8105,
                                                    name: "끈질긴 사냥꾼",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png"
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
                                                    id: 8014,
                                                    name: "최후의 일격",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"
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
                                        name: "구여름",
                                        id: "uZjG_181-GMK0I2dPUIGqwwzWh3k5boxcNiGOAxUeRJjXsc",
                                        isSearchTarget: true,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 15,
                                            name: "시비르",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/15.png"
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
                                                    id: 8236,
                                                    name: "폭풍의 결집",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png"
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
                                        name: "영원한 신",
                                        id: "FQVPTjRqi-uY9GCMSSPNQilZN-u4-zupw8pLSJgBJED6_EFkUv8Kf0KeeQ",
                                        isSearchTarget: false,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 246,
                                            name: "키아나",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/246.png"
                                        },
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
                                                    id: 8299,
                                                    name: "최후의 저항",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/LastStand/LastStand.png"
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
                                        name: "하얀 릿트",
                                        id: "i3v-zhyiO-yF8kPMzPmwe2xv3BTmCpp8rM_PJyhqZM7PzqI",
                                        isSearchTarget: false,
                                        isBlueTeam: false,
                                        champion: {
                                            id: 117,
                                            name: "룰루",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/117.png"
                                        },
                                        mainPerks: {
                                            style: {
                                                id: 8400,
                                                name: "결의",
                                                image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                            },
                                            slots: [
                                                {
                                                    id: 8465,
                                                    name: "수호자",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Guardian/Guardian.png"
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
                                                    id: 8347,
                                                    name: "우주적 통찰력",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                                                }
                                            ]
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
                                        ]
                                    }
                                ],
                                blueTeam: {
                                    bans: [
                                        {
                                            id: 64,
                                            name: "리 신",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/64.png"
                                        },
                                        {
                                            id: 163,
                                            name: "탈리야",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/163.png"
                                        },
                                        {
                                            id: 555,
                                            name: "파이크",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/555.png"
                                        },
                                        {
                                            id: 99,
                                            name: "럭스",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/99.png"
                                        },
                                        {
                                            id: 24,
                                            name: "잭스",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/24.png"
                                        }
                                    ]
                                },
                                redTeam: {
                                    bans: [
                                        {
                                            id: 42,
                                            name: "코르키",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/42.png"
                                        },
                                        {
                                            id: 64,
                                            name: "리 신",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/64.png"
                                        },
                                        null,
                                        {
                                            id: 43,
                                            name: "카르마",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/43.png"
                                        },
                                        {
                                            id: 41,
                                            name: "갱플랭크",
                                            image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/41.png"
                                        }
                                    ]
                                }
                            },
                            latestMatches: [
                                {
                                    id: "KR_5701271268",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642583222676,
                                    gameLength: 2347,
                                    participants: [
                                        {
                                            name: "작골은 탑꺼다",
                                            id: "HTRxtw4XEX7i-Vfo12aozUH-CravbWha0ngayzOVFmiGbr0",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 16,
                                            kills: 2,
                                            deaths: 5,
                                            assists: 11,
                                            kda: "2.600",
                                            killParticipation: "44.828",
                                            goldEarned: 12861,
                                            cs: 159,
                                            totalDamageDealt: 122311,
                                            totalDamageTaken: 40611,
                                            wardsPlaced: 18,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 4,
                                            visionScore: 26,
                                            champion: {
                                                id: 240,
                                                name: "클레드",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/240.png"
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
                                                    id: 6333,
                                                    name: "죽음의 무도",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6333.png"
                                                },
                                                {
                                                    id: 3068,
                                                    name: "태양불꽃 방패",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3068.png"
                                                },
                                                null,
                                                {
                                                    id: 2421,
                                                    name: "망가진 초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2421.png"
                                                },
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
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "o1dmaybe",
                                            id: "fT2B2WRumCNWqv5ttk310stfwSZBfs5j9IaE7P-2IqBP24w",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 18,
                                            kills: 5,
                                            deaths: 10,
                                            assists: 12,
                                            kda: "1.700",
                                            killParticipation: "58.621",
                                            goldEarned: 17050,
                                            cs: 68,
                                            totalDamageDealt: 238322,
                                            totalDamageTaken: 43251,
                                            wardsPlaced: 5,
                                            wardsKilled: 7,
                                            detectorWardsPlaced: 4,
                                            visionScore: 28,
                                            champion: {
                                                id: 91,
                                                name: "탈론",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/91.png"
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
                                                        id: 8143,
                                                        name: "돌발 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png"
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
                                                    id: 6695,
                                                    name: "독사의 송곳니",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6695.png"
                                                },
                                                {
                                                    id: 6694,
                                                    name: "세릴다의 원한",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6694.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3814,
                                                    name: "밤의 끝자락",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3814.png"
                                                },
                                                {
                                                    id: 6692,
                                                    name: "월식",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6692.png"
                                                },
                                                {
                                                    id: 3123,
                                                    name: "처형인의 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3123.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Comintoya1",
                                            id: "WXd-HYWsaiTkW9azNS_smpxZ6ojyL721QzrIqeoN5WjGuIYZ",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 18,
                                            kills: 12,
                                            deaths: 5,
                                            assists: 6,
                                            kda: "3.600",
                                            killParticipation: "62.069",
                                            goldEarned: 22096,
                                            cs: 316,
                                            totalDamageDealt: 322915,
                                            totalDamageTaken: 22380,
                                            wardsPlaced: 23,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 5,
                                            visionScore: 44,
                                            champion: {
                                                id: 4,
                                                name: "트위스티드 페이트",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/4.png"
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
                                                        id: 8134,
                                                        name: "영리한 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png"
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
                                                    id: 3100,
                                                    name: "리치베인",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3100.png"
                                                },
                                                {
                                                    id: 3089,
                                                    name: "라바돈의 죽음모자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3089.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3135,
                                                    name: "공허의 지팡이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3135.png"
                                                },
                                                {
                                                    id: 3094,
                                                    name: "고속 연사포",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3094.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "구여름",
                                            id: "uZjG_181-GMK0I2dPUIGqwwzWh3k5boxcNiGOAxUeRJjXsc",
                                            isSearchTarget: true,
                                            isBlueTeam: true,
                                            championLevel: 18,
                                            kills: 5,
                                            deaths: 5,
                                            assists: 17,
                                            kda: "4.400",
                                            killParticipation: "75.862",
                                            goldEarned: 17702,
                                            cs: 303,
                                            totalDamageDealt: 346017,
                                            totalDamageTaken: 27731,
                                            wardsPlaced: 14,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 6,
                                            visionScore: 30,
                                            champion: {
                                                id: 15,
                                                name: "시비르",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/15.png"
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
                                                        id: 8236,
                                                        name: "폭풍의 결집",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png"
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
                                                    id: 3026,
                                                    name: "수호 천사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3026.png"
                                                },
                                                {
                                                    id: 3074,
                                                    name: "굶주린 히드라",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3074.png"
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
                                                    id: 6691,
                                                    name: "드락사르의 황혼검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6691.png"
                                                },
                                                {
                                                    id: 3814,
                                                    name: "밤의 끝자락",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3814.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "빛보다빠른합류",
                                            id: "hpX4lKQQ0qBIG2AynSzBLd1jqcX4VsUdNG2EgcXxUvY5VQ",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 15,
                                            kills: 5,
                                            deaths: 10,
                                            assists: 12,
                                            kda: "1.700",
                                            killParticipation: "58.621",
                                            goldEarned: 12468,
                                            cs: 56,
                                            totalDamageDealt: 28631,
                                            totalDamageTaken: 24670,
                                            wardsPlaced: 49,
                                            wardsKilled: 10,
                                            detectorWardsPlaced: 2,
                                            visionScore: 89,
                                            champion: {
                                                id: 555,
                                                name: "파이크",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/555.png"
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
                                                        id: 9923,
                                                        name: "칼날비",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png"
                                                    },
                                                    {
                                                        id: 8126,
                                                        name: "비열한 한 방",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/CheapShot/CheapShot.png"
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
                                                    id: 2420,
                                                    name: "초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2420.png"
                                                },
                                                {
                                                    id: 3140,
                                                    name: "수은 장식띠",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3140.png"
                                                },
                                                {
                                                    id: 6693,
                                                    name: "자객의 발톱",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6693.png"
                                                },
                                                {
                                                    id: 3857,
                                                    name: "화이트록의 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3857.png"
                                                },
                                                {
                                                    id: 3179,
                                                    name: "그림자 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3179.png"
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
                                        },
                                        {
                                            name: "후쿠시마산꽃게",
                                            id: "M7MqwTLSL_0_0NRSQZVGk-UarUWPlNcQe9f_EdAFaGEmZw",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 18,
                                            kills: 8,
                                            deaths: 4,
                                            assists: 14,
                                            kda: "5.500",
                                            killParticipation: "62.857",
                                            goldEarned: 16676,
                                            cs: 260,
                                            totalDamageDealt: 264154,
                                            totalDamageTaken: 37215,
                                            wardsPlaced: 5,
                                            wardsKilled: 11,
                                            detectorWardsPlaced: 3,
                                            visionScore: 32,
                                            champion: {
                                                id: 6,
                                                name: "우르곳",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/6.png"
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
                                                        id: 8021,
                                                        name: "기민한 발놀림",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"
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
                                                    id: 6664,
                                                    name: "터보 화공 탱크",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6664.png"
                                                },
                                                {
                                                    id: 3140,
                                                    name: "수은 장식띠",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3140.png"
                                                },
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                {
                                                    id: 3071,
                                                    name: "칠흑의 양날 도끼",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3071.png"
                                                },
                                                {
                                                    id: 3748,
                                                    name: "거대한 히드라",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3748.png"
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
                                            name: "미련없이행동하기",
                                            id: "0gXlTOG7hW9JgARPIDmmqHgHwvKC5JUB-MmuCC5hdhQ5Ml67",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 18,
                                            kills: 3,
                                            deaths: 4,
                                            assists: 26,
                                            kda: "7.250",
                                            killParticipation: "82.857",
                                            goldEarned: 13994,
                                            cs: 39,
                                            totalDamageDealt: 237734,
                                            totalDamageTaken: 40353,
                                            wardsPlaced: 9,
                                            wardsKilled: 11,
                                            detectorWardsPlaced: 8,
                                            visionScore: 52,
                                            champion: {
                                                id: 76,
                                                name: "니달리",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/76.png"
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
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8210,
                                                        name: "깨달음",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                    },
                                                    {
                                                        id: 8232,
                                                        name: "물 위를 걷는 자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png"
                                                    }
                                                ]
                                            },
                                            items: [
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
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 1052,
                                                    name: "증폭의 고서",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1052.png"
                                                },
                                                {
                                                    id: 4636,
                                                    name: "밤의 수확자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4636.png"
                                                },
                                                {
                                                    id: 3165,
                                                    name: "모렐로노미콘",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3165.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "hyc0505",
                                            id: "gHQKKXeVo1FcJV7veZZ6t06MlUU-nwe3xk6zvnRgo2gyxn0",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 17,
                                            kills: 8,
                                            deaths: 11,
                                            assists: 12,
                                            kda: "1.818",
                                            killParticipation: "57.143",
                                            goldEarned: 14472,
                                            cs: 212,
                                            totalDamageDealt: 193370,
                                            totalDamageTaken: 30060,
                                            wardsPlaced: 4,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 1,
                                            visionScore: 14,
                                            champion: {
                                                id: 142,
                                                name: "조이",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/142.png"
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
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 3135,
                                                    name: "공허의 지팡이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3135.png"
                                                },
                                                {
                                                    id: 3102,
                                                    name: "밴시의 장막",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3102.png"
                                                },
                                                {
                                                    id: 6655,
                                                    name: "루덴의 폭풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6655.png"
                                                },
                                                {
                                                    id: 1058,
                                                    name: "쓸데없이 큰 지팡이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1058.png"
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
                                            name: "KT UP",
                                            id: "neJOLELpxGazWG9sjniaNfy32rckCqwLX8kCloqKrgOeTxs",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 18,
                                            kills: 12,
                                            deaths: 5,
                                            assists: 12,
                                            kda: "4.800",
                                            killParticipation: "68.571",
                                            goldEarned: 18593,
                                            cs: 281,
                                            totalDamageDealt: 307951,
                                            totalDamageTaken: 24341,
                                            wardsPlaced: 9,
                                            wardsKilled: 7,
                                            detectorWardsPlaced: 1,
                                            visionScore: 49,
                                            champion: {
                                                id: 202,
                                                name: "진",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/202.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 3,
                                                    name: "탈진",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerExhaust.png"
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
                                                    id: 3036,
                                                    name: "도미닉 경의 인사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3036.png"
                                                },
                                                {
                                                    id: 6671,
                                                    name: "돌풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6671.png"
                                                },
                                                {
                                                    id: 3026,
                                                    name: "수호 천사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3026.png"
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
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "keerbisi",
                                            id: "H3gUVlAWLbjiBLEdnEkufjVBSR2dLs0JN-WLKVU8P1eFYGI",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 15,
                                            kills: 4,
                                            deaths: 5,
                                            assists: 21,
                                            kda: "5.000",
                                            killParticipation: "71.429",
                                            goldEarned: 10128,
                                            cs: 56,
                                            totalDamageDealt: 28970,
                                            totalDamageTaken: 25300,
                                            wardsPlaced: 81,
                                            wardsKilled: 16,
                                            detectorWardsPlaced: 19,
                                            visionScore: 138,
                                            champion: {
                                                id: 497,
                                                name: "라칸",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/497.png"
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
                                                        id: 8465,
                                                        name: "수호자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Guardian/Guardian.png"
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
                                                        id: 8106,
                                                        name: "궁극의 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3860,
                                                    name: "타곤 산의 방벽",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3860.png"
                                                },
                                                {
                                                    id: 3107,
                                                    name: "구원",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3107.png"
                                                },
                                                {
                                                    id: 6656,
                                                    name: "만년서리",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6656.png"
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
                                                    id: 3067,
                                                    name: "점화석",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3067.png"
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
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/43.png"
                                            },
                                            {
                                                id: 119,
                                                name: "드레이븐",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/119.png"
                                            },
                                            {
                                                id: 114,
                                                name: "피오라",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/114.png"
                                            },
                                            {
                                                id: 246,
                                                name: "키아나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/246.png"
                                            },
                                            {
                                                id: 51,
                                                name: "케이틀린",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/51.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 29,
                                        dragonKills: 2,
                                        baronKills: 1,
                                        towerKills: 10,
                                        inhibitorKills: 2,
                                        riftHeraldKills: 1
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 67,
                                                name: "베인",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/67.png"
                                            },
                                            {
                                                id: 7,
                                                name: "르블랑",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/7.png"
                                            },
                                            null,
                                            {
                                                id: 99,
                                                name: "럭스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/99.png"
                                            },
                                            {
                                                id: 64,
                                                name: "리 신",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/64.png"
                                            }
                                        ],
                                        win: false,
                                        championKills: 35,
                                        dragonKills: 4,
                                        baronKills: 1,
                                        towerKills: 4,
                                        inhibitorKills: 1,
                                        riftHeraldKills: 1
                                    }
                                },
                                {
                                    id: "KR_5701104230",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642580547350,
                                    gameLength: 1263,
                                    participants: [
                                        {
                                            name: "그런데뭐어쩔티비",
                                            id: "dgGO5OhwAN7HRo_RjENmnzFAqavWDVjUVsdwF6evh31G3WM",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 13,
                                            kills: 4,
                                            deaths: 5,
                                            assists: 2,
                                            kda: "1.200",
                                            killParticipation: "35.294",
                                            goldEarned: 8778,
                                            cs: 169,
                                            totalDamageDealt: 107046,
                                            totalDamageTaken: 15771,
                                            wardsPlaced: 9,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 2,
                                            visionScore: 23,
                                            champion: {
                                                id: 13,
                                                name: "라이즈",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/13.png"
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
                                                        id: 8236,
                                                        name: "폭풍의 결집",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png"
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
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3040,
                                                    name: "대천사의 포옹",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3040.png"
                                                },
                                                {
                                                    id: 6656,
                                                    name: "만년서리",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6656.png"
                                                },
                                                null,
                                                {
                                                    id: 3145,
                                                    name: "마법공학 교류 발전기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3145.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                null,
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "김치 맛없다",
                                            id: "wBFNJ5FgDTAQP6WPEBcwHI-o1aGPOLfK43jfOvjM37hW0B8",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 13,
                                            kills: 2,
                                            deaths: 4,
                                            assists: 4,
                                            kda: "1.500",
                                            killParticipation: "35.294",
                                            goldEarned: 7014,
                                            cs: 36,
                                            totalDamageDealt: 110047,
                                            totalDamageTaken: 25610,
                                            wardsPlaced: 6,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 5,
                                            visionScore: 19,
                                            champion: {
                                                id: 5,
                                                name: "신 짜오",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/5.png"
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
                                                    id: 3133,
                                                    name: "콜필드의 전투 망치",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3133.png"
                                                },
                                                null,
                                                {
                                                    id: 6630,
                                                    name: "선혈포식자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6630.png"
                                                },
                                                {
                                                    id: 2031,
                                                    name: "충전형 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2031.png"
                                                },
                                                {
                                                    id: 1029,
                                                    name: "천 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1029.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "쇼메보다카타잘함",
                                            id: "QdIBGLTKFqqTZHigqA91LfmUEUpBxJhhAkvex8VzV0YZS_bghJdAS9Qyog",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 10,
                                            kills: 6,
                                            deaths: 8,
                                            assists: 2,
                                            kda: "1.000",
                                            killParticipation: "47.059",
                                            goldEarned: 7499,
                                            cs: 72,
                                            totalDamageDealt: 51717,
                                            totalDamageTaken: 19598,
                                            wardsPlaced: 3,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 1,
                                            visionScore: 15,
                                            champion: {
                                                id: 55,
                                                name: "카타리나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/55.png"
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
                                                        id: 8143,
                                                        name: "돌발 일격",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png"
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
                                                    id: 6632,
                                                    name: "신성한 파괴자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6632.png"
                                                },
                                                {
                                                    id: 3115,
                                                    name: "내셔의 이빨",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3115.png"
                                                },
                                                null,
                                                null,
                                                {
                                                    id: 1001,
                                                    name: "장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1001.png"
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
                                            name: "구여름",
                                            id: "uZjG_181-GMK0I2dPUIGqwwzWh3k5boxcNiGOAxUeRJjXsc",
                                            isSearchTarget: true,
                                            isBlueTeam: true,
                                            championLevel: 11,
                                            kills: 2,
                                            deaths: 5,
                                            assists: 4,
                                            kda: "1.200",
                                            killParticipation: "35.294",
                                            goldEarned: 7326,
                                            cs: 148,
                                            totalDamageDealt: 94325,
                                            totalDamageTaken: 9542,
                                            wardsPlaced: 9,
                                            wardsKilled: 2,
                                            detectorWardsPlaced: 3,
                                            visionScore: 13,
                                            champion: {
                                                id: 15,
                                                name: "시비르",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/15.png"
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
                                                        id: 8316,
                                                        name: "미니언 해체분석기",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
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
                                                null,
                                                {
                                                    id: 3134,
                                                    name: "톱날 단검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3134.png"
                                                },
                                                {
                                                    id: 3133,
                                                    name: "콜필드의 전투 망치",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3133.png"
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
                                            name: "tlqkfdnjselfckdl",
                                            id: "wJZs5Mf4UX9tBvZn4-MM8wR-mhhYCsf0qTJexb8cYD0sE_M9JlqWVIe2sA",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 10,
                                            kills: 2,
                                            deaths: 7,
                                            assists: 8,
                                            kda: "1.429",
                                            killParticipation: "58.824",
                                            goldEarned: 5956,
                                            cs: 45,
                                            totalDamageDealt: 28772,
                                            totalDamageTaken: 14637,
                                            wardsPlaced: 24,
                                            wardsKilled: 12,
                                            detectorWardsPlaced: 3,
                                            visionScore: 48,
                                            champion: {
                                                id: 44,
                                                name: "타릭",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/44.png"
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
                                                        id: 8453,
                                                        name: "소생",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Revitalize/Revitalize.png"
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
                                                        id: 8106,
                                                        name: "궁극의 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3067,
                                                    name: "점화석",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3067.png"
                                                },
                                                {
                                                    id: 3190,
                                                    name: "강철의 솔라리 펜던트",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3190.png"
                                                },
                                                {
                                                    id: 3857,
                                                    name: "화이트록의 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3857.png"
                                                },
                                                {
                                                    id: 3070,
                                                    name: "여신의 눈물",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3070.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "my top 666",
                                            id: "hyz90xeyq6JHnDTqmftTfFTtwazesDsKJJglvUMBvKgoMKYu705MbfE-Gg",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 14,
                                            kills: 5,
                                            deaths: 3,
                                            assists: 2,
                                            kda: "2.333",
                                            killParticipation: "24.138",
                                            goldEarned: 8302,
                                            cs: 162,
                                            totalDamageDealt: 78252,
                                            totalDamageTaken: 20043,
                                            wardsPlaced: 7,
                                            wardsKilled: 1,
                                            detectorWardsPlaced: 2,
                                            visionScore: 16,
                                            champion: {
                                                id: 75,
                                                name: "나서스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/75.png"
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
                                                    id: 8300,
                                                    name: "영감",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7203_Whimsy.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8360,
                                                        name: "봉인 풀린 주문서",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png"
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
                                                    id: 3121,
                                                    name: "종말의 겨울",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3121.png"
                                                },
                                                {
                                                    id: 6632,
                                                    name: "신성한 파괴자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6632.png"
                                                },
                                                {
                                                    id: 1029,
                                                    name: "천 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1029.png"
                                                },
                                                null,
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 1033,
                                                    name: "마법무효화의 망토",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1033.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "dangyadangyadang",
                                            id: "5j9ePoiTKEVBZI10NwuOi-DQLBURFIqQoRz33ayZBuSwulXuA-YDSIB-cg",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 14,
                                            kills: 10,
                                            deaths: 1,
                                            assists: 7,
                                            kda: "17.000",
                                            killParticipation: "58.621",
                                            goldEarned: 11749,
                                            cs: 36,
                                            totalDamageDealt: 146965,
                                            totalDamageTaken: 18680,
                                            wardsPlaced: 5,
                                            wardsKilled: 9,
                                            detectorWardsPlaced: 4,
                                            visionScore: 34,
                                            champion: {
                                                id: 234,
                                                name: "비에고",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/234.png"
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
                                                    id: 6673,
                                                    name: "불멸의 철갑궁",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6673.png"
                                                },
                                                {
                                                    id: 3111,
                                                    name: "헤르메스의 발걸음",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3111.png"
                                                },
                                                {
                                                    id: 1031,
                                                    name: "쇠사슬 조끼",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1031.png"
                                                },
                                                {
                                                    id: 3091,
                                                    name: "마법사의 최후",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3091.png"
                                                },
                                                {
                                                    id: 3133,
                                                    name: "콜필드의 전투 망치",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3133.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "KEEP DOlNG",
                                            id: "sfiOH2SipjgLtf8eDf4e-5-rtAAI3dt3bpzTn3TxVPCft9W_1ZSs5tIuSw",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 12,
                                            kills: 1,
                                            deaths: 7,
                                            assists: 4,
                                            kda: "0.714",
                                            killParticipation: "17.241",
                                            goldEarned: 6655,
                                            cs: 120,
                                            totalDamageDealt: 62609,
                                            totalDamageTaken: 13738,
                                            wardsPlaced: 13,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 5,
                                            visionScore: 25,
                                            champion: {
                                                id: 711,
                                                name: "벡스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/711.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 4,
                                                    name: "점멸",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerFlash.png"
                                                },
                                                {
                                                    id: 3,
                                                    name: "탈진",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerExhaust.png"
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
                                                        id: 8134,
                                                        name: "영리한 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png"
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
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 6656,
                                                    name: "만년서리",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6656.png"
                                                },
                                                {
                                                    id: 3108,
                                                    name: "악마의 마법서",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3108.png"
                                                },
                                                {
                                                    id: 1082,
                                                    name: "암흑의 인장",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1082.png"
                                                },
                                                {
                                                    id: 1056,
                                                    name: "도란의 반지",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1056.png"
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
                                            name: "asdfzxcvc",
                                            id: "ig_t3cZTicIYc7UkR-UZt35pRVoDg6eLgd5pqESqnQEoZv4",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 13,
                                            kills: 11,
                                            deaths: 3,
                                            assists: 7,
                                            kda: "6.000",
                                            killParticipation: "62.069",
                                            goldEarned: 11980,
                                            cs: 183,
                                            totalDamageDealt: 127554,
                                            totalDamageTaken: 15828,
                                            wardsPlaced: 10,
                                            wardsKilled: 8,
                                            detectorWardsPlaced: 4,
                                            visionScore: 17,
                                            champion: {
                                                id: 51,
                                                name: "케이틀린",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/51.png"
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
                                                        id: 8008,
                                                        name: "치명적 속도",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png"
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
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6671,
                                                    name: "돌풍",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6671.png"
                                                },
                                                null,
                                                {
                                                    id: 6676,
                                                    name: "징수의 총",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6676.png"
                                                },
                                                {
                                                    id: 1038,
                                                    name: "B.F. 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1038.png"
                                                },
                                                {
                                                    id: 1037,
                                                    name: "곡괭이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1037.png"
                                                },
                                                {
                                                    id: 3006,
                                                    name: "광전사의 군화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3006.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Gen G Poo",
                                            id: "UDMsHgWYsVRoNnrckJ2MxNYJi5TVoxQNPjrqLufs07nRQeLNHB1Go5Aa5g",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 11,
                                            kills: 2,
                                            deaths: 3,
                                            assists: 17,
                                            kda: "6.333",
                                            killParticipation: "65.517",
                                            goldEarned: 7216,
                                            cs: 7,
                                            totalDamageDealt: 12913,
                                            totalDamageTaken: 6900,
                                            wardsPlaced: 22,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 7,
                                            visionScore: 42,
                                            champion: {
                                                id: 117,
                                                name: "룰루",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/117.png"
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
                                            items: [
                                                {
                                                    id: 3853,
                                                    name: "얼음 정수의 파편",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3853.png"
                                                },
                                                {
                                                    id: 2065,
                                                    name: "슈렐리아의 군가",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2065.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3011,
                                                    name: "화학공학 부패기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3011.png"
                                                },
                                                {
                                                    id: 2031,
                                                    name: "충전형 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2031.png"
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
                                        }
                                    ],
                                    blueTeam: {
                                        bans: [
                                            {
                                                id: 39,
                                                name: "이렐리아",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/39.png"
                                            },
                                            {
                                                id: 142,
                                                name: "조이",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/142.png"
                                            },
                                            {
                                                id: 7,
                                                name: "르블랑",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/7.png"
                                            },
                                            {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/43.png"
                                            },
                                            {
                                                id: 202,
                                                name: "진",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/202.png"
                                            }
                                        ],
                                        win: false,
                                        championKills: 17,
                                        dragonKills: 0,
                                        baronKills: 0,
                                        towerKills: 1,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 0
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 4,
                                                name: "트위스티드 페이트",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/4.png"
                                            },
                                            {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/43.png"
                                            },
                                            {
                                                id: 131,
                                                name: "다이애나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/131.png"
                                            },
                                            null,
                                            {
                                                id: 23,
                                                name: "트린다미어",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/23.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 29,
                                        dragonKills: 2,
                                        baronKills: 1,
                                        towerKills: 3,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 2
                                    }
                                },
                                {
                                    id: "KR_5701060139",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642578417137,
                                    gameLength: 1753,
                                    participants: [
                                        {
                                            name: "조관우급 늪 설치",
                                            id: "xec3oOivOF_VJNl5ijNWVHYhQGBx5K4Zu7VwLYGtC4bOJ9w",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 15,
                                            kills: 10,
                                            deaths: 8,
                                            assists: 6,
                                            kda: "2.000",
                                            killParticipation: "48.485",
                                            goldEarned: 11820,
                                            cs: 158,
                                            totalDamageDealt: 97243,
                                            totalDamageTaken: 19827,
                                            wardsPlaced: 14,
                                            wardsKilled: 2,
                                            detectorWardsPlaced: 5,
                                            visionScore: 27,
                                            champion: {
                                                id: 69,
                                                name: "카시오페아",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/69.png"
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
                                                    id: 3040,
                                                    name: "대천사의 포옹",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3040.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 1052,
                                                    name: "증폭의 고서",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1052.png"
                                                },
                                                {
                                                    id: 1011,
                                                    name: "거인의 허리띠",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1011.png"
                                                },
                                                {
                                                    id: 6653,
                                                    name: "리안드리의 고뇌",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6653.png"
                                                },
                                                {
                                                    id: 1026,
                                                    name: "방출의 마법봉",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1026.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "쫌비킹",
                                            id: "07L6rr0mvcGfJ2t-wCPxWpxRvczLff4QAYaq6Uct3hOPA7Q",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 15,
                                            kills: 3,
                                            deaths: 3,
                                            assists: 14,
                                            kda: "5.667",
                                            killParticipation: "51.515",
                                            goldEarned: 11643,
                                            cs: 30,
                                            totalDamageDealt: 168211,
                                            totalDamageTaken: 34141,
                                            wardsPlaced: 12,
                                            wardsKilled: 8,
                                            detectorWardsPlaced: 4,
                                            visionScore: 44,
                                            champion: {
                                                id: 64,
                                                name: "리 신",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/64.png"
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
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 6333,
                                                    name: "죽음의 무도",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6333.png"
                                                },
                                                {
                                                    id: 3044,
                                                    name: "탐식의 망치",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3044.png"
                                                },
                                                {
                                                    id: 1037,
                                                    name: "곡괭이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1037.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Wayb 노제여보 ",
                                            id: "L8mcOTfoa_EbBJsTmEDTOtwKRYfEmEXI5KWRcOiK9zIrNHDVIOxiMT_VDA",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 17,
                                            kills: 9,
                                            deaths: 1,
                                            assists: 7,
                                            kda: "16.000",
                                            killParticipation: "48.485",
                                            goldEarned: 12147,
                                            cs: 179,
                                            totalDamageDealt: 141735,
                                            totalDamageTaken: 20325,
                                            wardsPlaced: 3,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 1,
                                            visionScore: 14,
                                            champion: {
                                                id: 517,
                                                name: "사일러스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/517.png"
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
                                                    id: 2420,
                                                    name: "초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2420.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 6656,
                                                    name: "만년서리",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6656.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 1082,
                                                    name: "암흑의 인장",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1082.png"
                                                },
                                                {
                                                    id: 4645,
                                                    name: "그림자불꽃",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4645.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "태 혐",
                                            id: "fFAoZqZf2uMX6VgrnXpI3JeTBeM5GMszWzM7PJSup54BFKEV",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 16,
                                            kills: 9,
                                            deaths: 1,
                                            assists: 11,
                                            kda: "20.000",
                                            killParticipation: "60.606",
                                            goldEarned: 15571,
                                            cs: 279,
                                            totalDamageDealt: 220684,
                                            totalDamageTaken: 15025,
                                            wardsPlaced: 8,
                                            wardsKilled: 6,
                                            detectorWardsPlaced: 2,
                                            visionScore: 20,
                                            champion: {
                                                id: 202,
                                                name: "진",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/202.png"
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
                                                    id: 2031,
                                                    name: "충전형 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2031.png"
                                                },
                                                {
                                                    id: 3094,
                                                    name: "고속 연사포",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3094.png"
                                                },
                                                {
                                                    id: 6676,
                                                    name: "징수의 총",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6676.png"
                                                },
                                                {
                                                    id: 6695,
                                                    name: "독사의 송곳니",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6695.png"
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
                                            name: "하모함오",
                                            id: "HiDWcmUEyIAmdKIrEQXugO4P17wL0gfTErt4m-CPYdMbhF4",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 2,
                                            deaths: 2,
                                            assists: 15,
                                            kda: "8.500",
                                            killParticipation: "51.515",
                                            goldEarned: 7882,
                                            cs: 28,
                                            totalDamageDealt: 21464,
                                            totalDamageTaken: 11547,
                                            wardsPlaced: 35,
                                            wardsKilled: 7,
                                            detectorWardsPlaced: 10,
                                            visionScore: 79,
                                            champion: {
                                                id: 111,
                                                name: "노틸러스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/111.png"
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
                                                        id: 8313,
                                                        name: "완벽한 타이밍",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png"
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
                                                    id: 3860,
                                                    name: "타곤 산의 방벽",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3860.png"
                                                },
                                                {
                                                    id: 3001,
                                                    name: "저녁갑주",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3001.png"
                                                },
                                                null,
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
                                                    id: 1028,
                                                    name: "루비 수정",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1028.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Freecssr",
                                            id: "0kNSJAjkUmmZBY2P7_7wnE2wqlKEeQ5G54K-jseSM6X4xY0",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 15,
                                            kills: 4,
                                            deaths: 5,
                                            assists: 3,
                                            kda: "1.400",
                                            killParticipation: "46.667",
                                            goldEarned: 11824,
                                            cs: 185,
                                            totalDamageDealt: 114173,
                                            totalDamageTaken: 15088,
                                            wardsPlaced: 9,
                                            wardsKilled: 2,
                                            detectorWardsPlaced: 2,
                                            visionScore: 25,
                                            champion: {
                                                id: 67,
                                                name: "베인",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/67.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 6,
                                                    name: "유체화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHaste.png"
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
                                                        id: 8135,
                                                        name: "굶주린 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png"
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
                                                    id: 3124,
                                                    name: "구인수의 격노검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3124.png"
                                                },
                                                {
                                                    id: 3046,
                                                    name: "유령 무희",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3046.png"
                                                },
                                                {
                                                    id: 6673,
                                                    name: "불멸의 철갑궁",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6673.png"
                                                },
                                                {
                                                    id: 3006,
                                                    name: "광전사의 군화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3006.png"
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
                                            name: "어쩔쵸비",
                                            id: "min8bKagbyV-qfA1itaG_2WZ-5JoNl6iMi74oTmyFO5hCg",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 14,
                                            kills: 6,
                                            deaths: 7,
                                            assists: 7,
                                            kda: "1.857",
                                            killParticipation: "86.667",
                                            goldEarned: 11879,
                                            cs: 27,
                                            totalDamageDealt: 151673,
                                            totalDamageTaken: 24120,
                                            wardsPlaced: 13,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 6,
                                            visionScore: 29,
                                            champion: {
                                                id: 238,
                                                name: "제드",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/238.png"
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
                                            items: [
                                                null,
                                                {
                                                    id: 2421,
                                                    name: "망가진 초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2421.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3142,
                                                    name: "요우무의 유령검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3142.png"
                                                },
                                                {
                                                    id: 6695,
                                                    name: "독사의 송곳니",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6695.png"
                                                },
                                                {
                                                    id: 6692,
                                                    name: "월식",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6692.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "zyf",
                                            id: "TYYu306AZu1U4L7S6nh5nhLifuTwyqPh8IMe_GJIKpRj1Mwb3WkwNLfIGA",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 14,
                                            kills: 2,
                                            deaths: 9,
                                            assists: 3,
                                            kda: "0.556",
                                            killParticipation: "33.333",
                                            goldEarned: 9999,
                                            cs: 184,
                                            totalDamageDealt: 118188,
                                            totalDamageTaken: 18989,
                                            wardsPlaced: 7,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 2,
                                            visionScore: 16,
                                            champion: {
                                                id: 711,
                                                name: "벡스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/711.png"
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
                                                    id: 6656,
                                                    name: "만년서리",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6656.png"
                                                },
                                                {
                                                    id: 4628,
                                                    name: "지평선의 초점",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4628.png"
                                                },
                                                {
                                                    id: 1026,
                                                    name: "방출의 마법봉",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1026.png"
                                                },
                                                null,
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
                                        },
                                        {
                                            name: "구여름",
                                            id: "uZjG_181-GMK0I2dPUIGqwwzWh3k5boxcNiGOAxUeRJjXsc",
                                            isSearchTarget: true,
                                            isBlueTeam: false,
                                            championLevel: 13,
                                            kills: 3,
                                            deaths: 6,
                                            assists: 1,
                                            kda: "0.667",
                                            killParticipation: "26.667",
                                            goldEarned: 11367,
                                            cs: 226,
                                            totalDamageDealt: 162750,
                                            totalDamageTaken: 11836,
                                            wardsPlaced: 13,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 4,
                                            visionScore: 24,
                                            champion: {
                                                id: 15,
                                                name: "시비르",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/15.png"
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
                                                        id: 8316,
                                                        name: "미니언 해체분석기",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
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
                                                    id: 1053,
                                                    name: "흡혈의 낫",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1053.png"
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
                                            name: "Lestiny",
                                            id: "aM5-8WwOiSGVLOMpMTggawgQRgxu4a96Z8p1Sze7RrRkAn1SBaLCAOEgMg",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 12,
                                            kills: 0,
                                            deaths: 6,
                                            assists: 4,
                                            kda: "0.667",
                                            killParticipation: "26.667",
                                            goldEarned: 5923,
                                            cs: 18,
                                            totalDamageDealt: 18523,
                                            totalDamageTaken: 14714,
                                            wardsPlaced: 27,
                                            wardsKilled: 7,
                                            detectorWardsPlaced: 11,
                                            visionScore: 53,
                                            champion: {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/43.png"
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
                                                    id: 2065,
                                                    name: "슈렐리아의 군가",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2065.png"
                                                },
                                                {
                                                    id: 3158,
                                                    name: "명석함의 아이오니아 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3158.png"
                                                },
                                                {
                                                    id: 3916,
                                                    name: "망각의 구",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3916.png"
                                                },
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
                                                id: 421,
                                                name: "렉사이",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/421.png"
                                            },
                                            {
                                                id: 7,
                                                name: "르블랑",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/7.png"
                                            },
                                            {
                                                id: 51,
                                                name: "케이틀린",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/51.png"
                                            },
                                            {
                                                id: 112,
                                                name: "빅토르",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/112.png"
                                            },
                                            {
                                                id: 91,
                                                name: "탈론",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/91.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 33,
                                        dragonKills: 3,
                                        baronKills: 1,
                                        towerKills: 7,
                                        inhibitorKills: 1,
                                        riftHeraldKills: 1
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 222,
                                                name: "징크스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/222.png"
                                            },
                                            {
                                                id: 51,
                                                name: "케이틀린",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/51.png"
                                            },
                                            {
                                                id: 246,
                                                name: "키아나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/246.png"
                                            },
                                            {
                                                id: 91,
                                                name: "탈론",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/91.png"
                                            },
                                            null
                                        ],
                                        win: false,
                                        championKills: 15,
                                        dragonKills: 0,
                                        baronKills: 0,
                                        towerKills: 4,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 1
                                    }
                                },
                                {
                                    id: "KR_5700951047",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642574921173,
                                    gameLength: 1675,
                                    participants: [
                                        {
                                            name: "Aredbb",
                                            id: "1kf_0W_75GczOIR5Zv_TLEBBqDYtA2xutveYyjlDqVWDBJUobr2SVAEjzQ",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 14,
                                            kills: 7,
                                            deaths: 9,
                                            assists: 4,
                                            kda: "1.222",
                                            killParticipation: "47.826",
                                            goldEarned: 10735,
                                            cs: 142,
                                            totalDamageDealt: 99292,
                                            totalDamageTaken: 25122,
                                            wardsPlaced: 14,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 5,
                                            visionScore: 26,
                                            champion: {
                                                id: 875,
                                                name: "세트",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/875.png"
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
                                                    id: 3044,
                                                    name: "탐식의 망치",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3044.png"
                                                },
                                                {
                                                    id: 6631,
                                                    name: "발걸음 분쇄기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6631.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                {
                                                    id: 6333,
                                                    name: "죽음의 무도",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6333.png"
                                                },
                                                {
                                                    id: 1054,
                                                    name: "도란의 방패",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1054.png"
                                                },
                                                {
                                                    id: 1037,
                                                    name: "곡괭이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1037.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "JUGDOG 12",
                                            id: "3q8AhPpUsqnvK78zhnC4irnZwsDuxdeMup2blpPS8jFkkas",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 13,
                                            kills: 8,
                                            deaths: 8,
                                            assists: 3,
                                            kda: "1.375",
                                            killParticipation: "47.826",
                                            goldEarned: 12014,
                                            cs: 35,
                                            totalDamageDealt: 123022,
                                            totalDamageTaken: 25748,
                                            wardsPlaced: 14,
                                            wardsKilled: 2,
                                            detectorWardsPlaced: 6,
                                            visionScore: 22,
                                            champion: {
                                                id: 64,
                                                name: "리 신",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/64.png"
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
                                                    id: 6693,
                                                    name: "자객의 발톱",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6693.png"
                                                },
                                                {
                                                    id: 3142,
                                                    name: "요우무의 유령검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3142.png"
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
                                                    id: 6696,
                                                    name: "원칙의 원형낫",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6696.png"
                                                },
                                                {
                                                    id: 3133,
                                                    name: "콜필드의 전투 망치",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3133.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "lengqingxue2",
                                            id: "YS7UdvlNQOqGoZ2Toih2CkhSFqE7pIL6LmnTtv7LxY18D6M",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 13,
                                            kills: 0,
                                            deaths: 11,
                                            assists: 8,
                                            kda: "0.727",
                                            killParticipation: "34.783",
                                            goldEarned: 8394,
                                            cs: 159,
                                            totalDamageDealt: 89899,
                                            totalDamageTaken: 19034,
                                            wardsPlaced: 7,
                                            wardsKilled: 0,
                                            detectorWardsPlaced: 0,
                                            visionScore: 10,
                                            champion: {
                                                id: 142,
                                                name: "조이",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/142.png"
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
                                                        id: 8313,
                                                        name: "완벽한 타이밍",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png"
                                                    },
                                                    {
                                                        id: 8321,
                                                        name: "외상",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png"
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
                                                    id: 2033,
                                                    name: "부패 물약",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2033.png"
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
                                                    id: 4628,
                                                    name: "지평선의 초점",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4628.png"
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
                                            name: "un diffuseur",
                                            id: "pnpcicSdghUZeTitRSfqC20bpgndTGQpiPnj1rwZeYBoBtU",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 13,
                                            kills: 7,
                                            deaths: 5,
                                            assists: 7,
                                            kda: "2.800",
                                            killParticipation: "60.870",
                                            goldEarned: 12004,
                                            cs: 220,
                                            totalDamageDealt: 139545,
                                            totalDamageTaken: 30961,
                                            wardsPlaced: 12,
                                            wardsKilled: 6,
                                            detectorWardsPlaced: 3,
                                            visionScore: 30,
                                            champion: {
                                                id: 81,
                                                name: "이즈리얼",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/81.png"
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
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
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
                                                    id: 3082,
                                                    name: "파수꾼의 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3082.png"
                                                },
                                                {
                                                    id: 3042,
                                                    name: "무라마나",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3042.png"
                                                },
                                                null,
                                                {
                                                    id: 6694,
                                                    name: "세릴다의 원한",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6694.png"
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
                                            name: "haonanguo",
                                            id: "mpeRKmoMNI9HVbQTpPH4YBjkXJ_PGWR0Giem0ucCdFn2fUDEP5OjRN4vHg",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 12,
                                            kills: 1,
                                            deaths: 4,
                                            assists: 13,
                                            kda: "3.500",
                                            killParticipation: "60.870",
                                            goldEarned: 6717,
                                            cs: 4,
                                            totalDamageDealt: 14503,
                                            totalDamageTaken: 12383,
                                            wardsPlaced: 29,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 3,
                                            visionScore: 50,
                                            champion: {
                                                id: 350,
                                                name: "유미",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/350.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 3,
                                                    name: "탈진",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerExhaust.png"
                                                },
                                                {
                                                    id: 14,
                                                    name: "점화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerDot.png"
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
                                                        id: 8233,
                                                        name: "절대 집중",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png"
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
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3853,
                                                    name: "얼음 정수의 파편",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3853.png"
                                                },
                                                {
                                                    id: 3107,
                                                    name: "구원",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3107.png"
                                                },
                                                {
                                                    id: 6617,
                                                    name: "월석 재생기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6617.png"
                                                },
                                                {
                                                    id: 3114,
                                                    name: "금지된 우상",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3114.png"
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
                                            name: "응보석2개만낄거",
                                            id: "sXigiVOq7J3EJgQF4SeuE7H_zx140WaVTv2BgMKYTnDc1Q",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 15,
                                            kills: 3,
                                            deaths: 7,
                                            assists: 9,
                                            kda: "1.714",
                                            killParticipation: "32.432",
                                            goldEarned: 13410,
                                            cs: 201,
                                            totalDamageDealt: 145013,
                                            totalDamageTaken: 17549,
                                            wardsPlaced: 8,
                                            wardsKilled: 4,
                                            detectorWardsPlaced: 2,
                                            visionScore: 20,
                                            champion: {
                                                id: 67,
                                                name: "베인",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/67.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 6,
                                                    name: "유체화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerHaste.png"
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
                                                        id: 9104,
                                                        name: "전설: 민첩함",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"
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
                                                        id: 8347,
                                                        name: "우주적 통찰력",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
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
                                                    id: 2420,
                                                    name: "초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2420.png"
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
                                                {
                                                    id: 3124,
                                                    name: "구인수의 격노검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3124.png"
                                                },
                                                {
                                                    id: 3153,
                                                    name: "몰락한 왕의 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3153.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "o1dmaybe",
                                            id: "fT2B2WRumCNWqv5ttk310stfwSZBfs5j9IaE7P-2IqBP24w",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 16,
                                            kills: 15,
                                            deaths: 2,
                                            assists: 13,
                                            kda: "14.000",
                                            killParticipation: "75.676",
                                            goldEarned: 14790,
                                            cs: 27,
                                            totalDamageDealt: 196086,
                                            totalDamageTaken: 33030,
                                            wardsPlaced: 10,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 6,
                                            visionScore: 28,
                                            champion: {
                                                id: 76,
                                                name: "니달리",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/76.png"
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
                                                    id: 8200,
                                                    name: "마법",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7202_Sorcery.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8210,
                                                        name: "깨달음",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png"
                                                    },
                                                    {
                                                        id: 8232,
                                                        name: "물 위를 걷는 자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 3152,
                                                    name: "마법공학 로켓 벨트",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3152.png"
                                                },
                                                null,
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3041,
                                                    name: "메자이의 영혼약탈자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3041.png"
                                                },
                                                {
                                                    id: 4645,
                                                    name: "그림자불꽃",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4645.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Back to tomorrow",
                                            id: "6kPCU-2P-oFloS5apsbF94KFT_hJhnNXVkV_FJdtnOxN1Xo",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 14,
                                            kills: 14,
                                            deaths: 7,
                                            assists: 8,
                                            kda: "3.143",
                                            killParticipation: "59.459",
                                            goldEarned: 14276,
                                            cs: 154,
                                            totalDamageDealt: 119572,
                                            totalDamageTaken: 18877,
                                            wardsPlaced: 2,
                                            wardsKilled: 8,
                                            detectorWardsPlaced: 0,
                                            visionScore: 17,
                                            champion: {
                                                id: 166,
                                                name: "아크샨",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/166.png"
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
                                                        id: 8401,
                                                        name: "보호막 강타",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/MirrorShell/MirrorShell.png"
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
                                                    id: 1055,
                                                    name: "도란의 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1055.png"
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
                                                    id: 3094,
                                                    name: "고속 연사포",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3094.png"
                                                },
                                                {
                                                    id: 3814,
                                                    name: "밤의 끝자락",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3814.png"
                                                },
                                                {
                                                    id: 3006,
                                                    name: "광전사의 군화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3006.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "구여름",
                                            id: "uZjG_181-GMK0I2dPUIGqwwzWh3k5boxcNiGOAxUeRJjXsc",
                                            isSearchTarget: true,
                                            isBlueTeam: false,
                                            championLevel: 14,
                                            kills: 4,
                                            deaths: 3,
                                            assists: 11,
                                            kda: "5.000",
                                            killParticipation: "40.541",
                                            goldEarned: 11552,
                                            cs: 203,
                                            totalDamageDealt: 168505,
                                            totalDamageTaken: 13044,
                                            wardsPlaced: 10,
                                            wardsKilled: 6,
                                            detectorWardsPlaced: 3,
                                            visionScore: 30,
                                            champion: {
                                                id: 15,
                                                name: "시비르",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/15.png"
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
                                                        id: 8316,
                                                        name: "미니언 해체분석기",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
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
                                                    id: 3042,
                                                    name: "무라마나",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3042.png"
                                                },
                                                {
                                                    id: 3047,
                                                    name: "판금 장화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3047.png"
                                                },
                                                null,
                                                {
                                                    id: 3074,
                                                    name: "굶주린 히드라",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3074.png"
                                                },
                                                {
                                                    id: 6691,
                                                    name: "드락사르의 황혼검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6691.png"
                                                },
                                                null,
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "속옷이 울면",
                                            id: "ObFPEBEXWsckK8k9X7EJdS9WCVn-Zt_gWu9_X-FNL0zdNQ",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 12,
                                            kills: 1,
                                            deaths: 4,
                                            assists: 16,
                                            kda: "4.250",
                                            killParticipation: "45.946",
                                            goldEarned: 7471,
                                            cs: 33,
                                            totalDamageDealt: 17729,
                                            totalDamageTaken: 17234,
                                            wardsPlaced: 31,
                                            wardsKilled: 6,
                                            detectorWardsPlaced: 8,
                                            visionScore: 66,
                                            champion: {
                                                id: 201,
                                                name: "브라움",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/201.png"
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
                                                    id: 8400,
                                                    name: "결의",
                                                    image: "http://127.0.0.1:4000/static/img/perk-images/Styles/7204_Resolve.png"
                                                },
                                                slots: [
                                                    {
                                                        id: 8465,
                                                        name: "수호자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Guardian/Guardian.png"
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
                                                        id: 8451,
                                                        name: "과잉성장",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Overgrowth/Overgrowth.png"
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
                                                    id: 3109,
                                                    name: "기사의 맹세",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3109.png"
                                                },
                                                {
                                                    id: 3190,
                                                    name: "강철의 솔라리 펜던트",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3190.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3857,
                                                    name: "화이트록의 갑옷",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3857.png"
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
                                        }
                                    ],
                                    blueTeam: {
                                        bans: [
                                            {
                                                id: 104,
                                                name: "그레이브즈",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/104.png"
                                            },
                                            {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/43.png"
                                            },
                                            {
                                                id: 131,
                                                name: "다이애나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/131.png"
                                            },
                                            {
                                                id: 24,
                                                name: "잭스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/24.png"
                                            },
                                            {
                                                id: 112,
                                                name: "빅토르",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/112.png"
                                            }
                                        ],
                                        win: false,
                                        championKills: 23,
                                        dragonKills: 1,
                                        baronKills: 0,
                                        towerKills: 2,
                                        inhibitorKills: 0,
                                        riftHeraldKills: 1
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 887,
                                                name: "그웬",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/887.png"
                                            },
                                            {
                                                id: 246,
                                                name: "키아나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/246.png"
                                            },
                                            {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/43.png"
                                            },
                                            {
                                                id: 117,
                                                name: "룰루",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/117.png"
                                            },
                                            {
                                                id: 84,
                                                name: "아칼리",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/84.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 37,
                                        dragonKills: 3,
                                        baronKills: 0,
                                        towerKills: 10,
                                        inhibitorKills: 2,
                                        riftHeraldKills: 1
                                    }
                                },
                                {
                                    id: "KR_5700824539",
                                    gameMode: "솔랭",
                                    gameStartTime: 1642571770212,
                                    gameLength: 1930,
                                    participants: [
                                        {
                                            name: "unknown89",
                                            id: "drRDYY6l49rsywokvltMaGdOlsq3zq-rfhpIa2_E1KSor4I",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 17,
                                            kills: 8,
                                            deaths: 6,
                                            assists: 9,
                                            kda: "2.833",
                                            killParticipation: "53.125",
                                            goldEarned: 14625,
                                            cs: 201,
                                            totalDamageDealt: 158457,
                                            totalDamageTaken: 33221,
                                            wardsPlaced: 12,
                                            wardsKilled: 0,
                                            detectorWardsPlaced: 3,
                                            visionScore: 20,
                                            champion: {
                                                id: 39,
                                                name: "이렐리아",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/39.png"
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
                                                    id: 3026,
                                                    name: "수호 천사",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3026.png"
                                                },
                                                {
                                                    id: 3153,
                                                    name: "몰락한 왕의 검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3153.png"
                                                },
                                                {
                                                    id: 6664,
                                                    name: "터보 화공 탱크",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6664.png"
                                                },
                                                {
                                                    id: 3053,
                                                    name: "스테락의 도전",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3053.png"
                                                },
                                                null,
                                                {
                                                    id: 3111,
                                                    name: "헤르메스의 발걸음",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3111.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Nenomius",
                                            id: "ZLFdhUZKmokxd1F7WlvpQcsD0M4u3u3RZBh9MR2CPkuxw6Dnrz-qUfwmsA",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 16,
                                            kills: 3,
                                            deaths: 10,
                                            assists: 16,
                                            kda: "1.900",
                                            killParticipation: "59.375",
                                            goldEarned: 10933,
                                            cs: 29,
                                            totalDamageDealt: 148536,
                                            totalDamageTaken: 37205,
                                            wardsPlaced: 6,
                                            wardsKilled: 15,
                                            detectorWardsPlaced: 4,
                                            visionScore: 38,
                                            champion: {
                                                id: 76,
                                                name: "니달리",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/76.png"
                                            },
                                            summonerSpells: [
                                                {
                                                    id: 3,
                                                    name: "탈진",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerExhaust.png"
                                                },
                                                {
                                                    id: 11,
                                                    name: "강타",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/spell/SummonerSmite.png"
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
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 4630,
                                                    name: "역병의 보석",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4630.png"
                                                },
                                                {
                                                    id: 4636,
                                                    name: "밤의 수확자",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4636.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3145,
                                                    name: "마법공학 교류 발전기",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3145.png"
                                                },
                                                {
                                                    id: 1082,
                                                    name: "암흑의 인장",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1082.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "천사큐리안",
                                            id: "TldPDvQq3aOO4Ta5PY8xrxvNq13O5oy6ylo-Tjui12qOOtk",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 17,
                                            kills: 9,
                                            deaths: 7,
                                            assists: 5,
                                            kda: "2.000",
                                            killParticipation: "43.750",
                                            goldEarned: 13643,
                                            cs: 206,
                                            totalDamageDealt: 161131,
                                            totalDamageTaken: 18788,
                                            wardsPlaced: 16,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 2,
                                            visionScore: 25,
                                            champion: {
                                                id: 45,
                                                name: "베이가",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/45.png"
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
                                                        id: 8124,
                                                        name: "포식자",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/Predator/Predator.png"
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
                                                        id: 8134,
                                                        name: "영리한 사냥꾼",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png"
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
                                                        id: 8321,
                                                        name: "외상",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png"
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
                                                    id: 2420,
                                                    name: "초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2420.png"
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
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 3102,
                                                    name: "밴시의 장막",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3102.png"
                                                },
                                                {
                                                    id: 3040,
                                                    name: "대천사의 포옹",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3040.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Factory",
                                            id: "Zc6_-UfOriICsdUUG3D3rDYXKF5oj96Bfx7pL3-1i0gLF_SIjN858Sre8w",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 16,
                                            kills: 4,
                                            deaths: 0,
                                            assists: 13,
                                            kda: "Infinity",
                                            killParticipation: "53.125",
                                            goldEarned: 13819,
                                            cs: 245,
                                            totalDamageDealt: 207040,
                                            totalDamageTaken: 11254,
                                            wardsPlaced: 12,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 3,
                                            visionScore: 32,
                                            champion: {
                                                id: 202,
                                                name: "진",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/202.png"
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
                                                    id: 1038,
                                                    name: "B.F. 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1038.png"
                                                },
                                                {
                                                    id: 1037,
                                                    name: "곡괭이",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1037.png"
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
                                        },
                                        {
                                            name: "9999999988888888",
                                            id: "JtxTpuTVWarJ2MmqL68cp6HUQx9CmiqDTJftNo8MQCQRla_kAgIzDZalag",
                                            isSearchTarget: false,
                                            isBlueTeam: true,
                                            championLevel: 15,
                                            kills: 8,
                                            deaths: 5,
                                            assists: 15,
                                            kda: "4.600",
                                            killParticipation: "71.875",
                                            goldEarned: 11075,
                                            cs: 8,
                                            totalDamageDealt: 34291,
                                            totalDamageTaken: 20825,
                                            wardsPlaced: 42,
                                            wardsKilled: 5,
                                            detectorWardsPlaced: 16,
                                            visionScore: 70,
                                            champion: {
                                                id: 43,
                                                name: "카르마",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/43.png"
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
                                                    id: 2065,
                                                    name: "슈렐리아의 군가",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2065.png"
                                                },
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
                                                    id: 4643,
                                                    name: "경계의 와드석",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4643.png"
                                                },
                                                {
                                                    id: 3105,
                                                    name: "군단의 방패",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3105.png"
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
                                            name: "구도파악하기",
                                            id: "_ct5naxiOZg4Uq5RNF4CmsBBTIHB-OodgPuYYCylBzHSQnabth0M8mCg6g",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 16,
                                            kills: 6,
                                            deaths: 7,
                                            assists: 8,
                                            kda: "2.000",
                                            killParticipation: "50.000",
                                            goldEarned: 12095,
                                            cs: 176,
                                            totalDamageDealt: 111810,
                                            totalDamageTaken: 22567,
                                            wardsPlaced: 10,
                                            wardsKilled: 3,
                                            detectorWardsPlaced: 4,
                                            visionScore: 25,
                                            champion: {
                                                id: 85,
                                                name: "케넨",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/85.png"
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
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                {
                                                    id: 3152,
                                                    name: "마법공학 로켓 벨트",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3152.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 4630,
                                                    name: "역병의 보석",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4630.png"
                                                },
                                                {
                                                    id: 3165,
                                                    name: "모렐로노미콘",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3165.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "상근 정원",
                                            id: "pI-g-OKCEAfy5mKbdkW0yTj6TJKZP4Er2RwNdS8JFR37aDE",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 15,
                                            kills: 6,
                                            deaths: 7,
                                            assists: 10,
                                            kda: "2.286",
                                            killParticipation: "57.143",
                                            goldEarned: 12893,
                                            cs: 35,
                                            totalDamageDealt: 212990,
                                            totalDamageTaken: 29727,
                                            wardsPlaced: 8,
                                            wardsKilled: 6,
                                            detectorWardsPlaced: 7,
                                            visionScore: 38,
                                            champion: {
                                                id: 131,
                                                name: "다이애나",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/131.png"
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
                                                    id: 3152,
                                                    name: "마법공학 로켓 벨트",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3152.png"
                                                },
                                                {
                                                    id: 3191,
                                                    name: "추적자의 팔목 보호대",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3191.png"
                                                },
                                                {
                                                    id: 3165,
                                                    name: "모렐로노미콘",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3165.png"
                                                },
                                                {
                                                    id: 3020,
                                                    name: "마법사의 신발",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3020.png"
                                                },
                                                {
                                                    id: 4645,
                                                    name: "그림자불꽃",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/4645.png"
                                                },
                                                {
                                                    id: 2421,
                                                    name: "망가진 초시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2421.png"
                                                },
                                                {
                                                    id: 3364,
                                                    name: "예언자의 렌즈",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3364.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "구여름",
                                            id: "uZjG_181-GMK0I2dPUIGqwwzWh3k5boxcNiGOAxUeRJjXsc",
                                            isSearchTarget: true,
                                            isBlueTeam: false,
                                            championLevel: 15,
                                            kills: 6,
                                            deaths: 8,
                                            assists: 7,
                                            kda: "1.625",
                                            killParticipation: "46.429",
                                            goldEarned: 14729,
                                            cs: 221,
                                            totalDamageDealt: 220482,
                                            totalDamageTaken: 16869,
                                            wardsPlaced: 10,
                                            wardsKilled: 2,
                                            detectorWardsPlaced: 2,
                                            visionScore: 28,
                                            champion: {
                                                id: 15,
                                                name: "시비르",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/15.png"
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
                                                        id: 8316,
                                                        name: "미니언 해체분석기",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
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
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3074,
                                                    name: "굶주린 히드라",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3074.png"
                                                },
                                                {
                                                    id: 6691,
                                                    name: "드락사르의 황혼검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6691.png"
                                                },
                                                {
                                                    id: 3156,
                                                    name: "맬모셔스의 아귀",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3156.png"
                                                },
                                                {
                                                    id: 3363,
                                                    name: "망원형 개조",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3363.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "sdhjxkfdckl",
                                            id: "H3vLz8lcXzINkCmyrA_2_21ev9RHxmQ9xs3AxNnvsdf9aSA",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 17,
                                            kills: 8,
                                            deaths: 5,
                                            assists: 3,
                                            kda: "2.200",
                                            killParticipation: "39.286",
                                            goldEarned: 16757,
                                            cs: 289,
                                            totalDamageDealt: 260052,
                                            totalDamageTaken: 17616,
                                            wardsPlaced: 14,
                                            wardsKilled: 9,
                                            detectorWardsPlaced: 3,
                                            visionScore: 45,
                                            champion: {
                                                id: 157,
                                                name: "야스오",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/157.png"
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
                                                        id: 8473,
                                                        name: "뼈 방패",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/BonePlating/BonePlating.png"
                                                    },
                                                    {
                                                        id: 8453,
                                                        name: "소생",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Resolve/Revitalize/Revitalize.png"
                                                    }
                                                ]
                                            },
                                            items: [
                                                {
                                                    id: 6673,
                                                    name: "불멸의 철갑궁",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/6673.png"
                                                },
                                                {
                                                    id: 3139,
                                                    name: "헤르메스의 시미터",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3139.png"
                                                },
                                                {
                                                    id: 3031,
                                                    name: "무한의 대검",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3031.png"
                                                },
                                                {
                                                    id: 1053,
                                                    name: "흡혈의 낫",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/1053.png"
                                                },
                                                {
                                                    id: 3006,
                                                    name: "광전사의 군화",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3006.png"
                                                },
                                                {
                                                    id: 3033,
                                                    name: "필멸자의 운명",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3033.png"
                                                },
                                                {
                                                    id: 3340,
                                                    name: "투명 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3340.png"
                                                }
                                            ]
                                        },
                                        {
                                            name: "B1gFour",
                                            id: "4ekc7L3xOtv-nZyFEhhUwNdK1i_DQwYujqXHqKkiVZ8Gwg",
                                            isSearchTarget: false,
                                            isBlueTeam: false,
                                            championLevel: 13,
                                            kills: 0,
                                            deaths: 5,
                                            assists: 8,
                                            kda: "1.600",
                                            killParticipation: "28.571",
                                            goldEarned: 8121,
                                            cs: 55,
                                            totalDamageDealt: 23705,
                                            totalDamageTaken: 17326,
                                            wardsPlaced: 46,
                                            wardsKilled: 18,
                                            detectorWardsPlaced: 13,
                                            visionScore: 96,
                                            champion: {
                                                id: 111,
                                                name: "노틸러스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/111.png"
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
                                                        id: 8313,
                                                        name: "완벽한 타이밍",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png"
                                                    },
                                                    {
                                                        id: 8316,
                                                        name: "미니언 해체분석기",
                                                        image: "http://127.0.0.1:4000/static/img/perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png"
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
                                                    id: 3001,
                                                    name: "저녁갑주",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3001.png"
                                                },
                                                {
                                                    id: 3860,
                                                    name: "타곤 산의 방벽",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3860.png"
                                                },
                                                {
                                                    id: 2055,
                                                    name: "제어 와드",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/2055.png"
                                                },
                                                {
                                                    id: 3157,
                                                    name: "존야의 모래시계",
                                                    image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/item/3157.png"
                                                },
                                                null,
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
                                        }
                                    ],
                                    blueTeam: {
                                        bans: [
                                            {
                                                id: 117,
                                                name: "룰루",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/117.png"
                                            },
                                            {
                                                id: 81,
                                                name: "이즈리얼",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/81.png"
                                            },
                                            {
                                                id: 421,
                                                name: "렉사이",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/421.png"
                                            },
                                            {
                                                id: 91,
                                                name: "탈론",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/91.png"
                                            },
                                            {
                                                id: 238,
                                                name: "제드",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/238.png"
                                            }
                                        ],
                                        win: false,
                                        championKills: 32,
                                        dragonKills: 2,
                                        baronKills: 2,
                                        towerKills: 5,
                                        inhibitorKills: 1,
                                        riftHeraldKills: 0
                                    },
                                    redTeam: {
                                        bans: [
                                            {
                                                id: 7,
                                                name: "르블랑",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/7.png"
                                            },
                                            {
                                                id: 91,
                                                name: "탈론",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/91.png"
                                            },
                                            {
                                                id: 53,
                                                name: "블리츠크랭크",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/53.png"
                                            },
                                            {
                                                id: 222,
                                                name: "징크스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/222.png"
                                            },
                                            {
                                                id: 523,
                                                name: "아펠리오스",
                                                image: "http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/523.png"
                                            }
                                        ],
                                        win: true,
                                        championKills: 28,
                                        dragonKills: 3,
                                        baronKills: 0,
                                        towerKills: 10,
                                        inhibitorKills: 2,
                                        riftHeraldKills: 2
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