import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserTier from '../../components/UserTier/UserTier';

interface User {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    profileIconUri: string;
    revisionDate: number;
    summonerLevel: number;
    tiers: {
        solo: Tier,
        team: Tier
    }
}

interface Tier {
    tier: string;
    tierImage: string;
    rank?: string;
    wins?: number;
    losses?: number;
}

const Histories = (): JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | undefined | false>();
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
                            id: 'F_snKLhC_Kck921IU30DtHJStIGoV4lJcr4X4J5kvW2LZw',
                            accountId: 'PLaHM7vT7Pfs-QiK9n-OjB5uHfL1Nn7CIgroAG6q5bOJ',
                            puuid: 'b0XjOSpDlTzSkw9O_LJ5u2iiHc1y8RLked9YoGsxJc743YVXXTSeHshMZNYpQvvSRQn73O4ZwYSkog',
                            name: '콘요맘떼ㅣㅇ라고도',
                            profileIconId: 3622,
                            profileIconUri: "http://127.0.0.1:4000/static/img/profileicon/3622.png",
                            revisionDate: 1639978640000,
                            summonerLevel: 160,
                            tiers: {
                                solo: {
                                    tier: "UNRANKED",
                                    tierImage: "http://127.0.0.1:4000/static/img/tiers/UNRANKED.png"
                                },
                                team: {
                                    tier: "SILVER",
                                    tierImage: "http://127.0.0.1:4000/static/img/tiers/SILVER.png",
                                    rank: "I",
                                    leaguePoints: 1,
                                    wins: 8,
                                    losses: 6,
                                }
                            }
                        }
                    }
                };
                setUser(response.data);
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

    return loading ? (
        <Loader />
    ) : (
        <>
            {user && (
                <>
                    <UserProfile
                        name={user.name}
                        profileIconUri={user.profileIconUri}
                        profileIconId={user.profileIconId}
                        summonerLevel={user.summonerLevel}
                        refresh={fetchUser}
                    />
                    <div className='tiers-container'>
                        <UserTier
                            isSolo={true}
                            {...user.tiers.solo}
                        />
                        <UserTier
                            isSolo={false}
                            {...user.tiers.team}
                        />
                    </div>
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