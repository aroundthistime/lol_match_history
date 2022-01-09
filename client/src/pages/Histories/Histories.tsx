import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import UserProfile from '../../components/UserProfile/UserProfile';

interface User {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    profileIconUri: string;
    revisionDate: number;
    summonerLevel: number;
}

const Histories = (): JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | undefined | false>();
    const params = useParams();
    const { username } = params;

    const fetchUser = async () => {
        if (username) {
            try {
                const response = {
                    data: {
                        id: 'F_snKLhC_Kck921IU30DtHJStIGoV4lJcr4X4J5kvW2LZw',
                        accountId: 'PLaHM7vT7Pfs-QiK9n-OjB5uHfL1Nn7CIgroAG6q5bOJ',
                        puuid: 'b0XjOSpDlTzSkw9O_LJ5u2iiHc1y8RLked9YoGsxJc743YVXXTSeHshMZNYpQvvSRQn73O4ZwYSkog',
                        name: '콘요맘떼',
                        profileIconId: 3622,
                        profileIconUri: "http://127.0.0.1:4000/static/img/profileicon/3622.png",
                        revisionDate: 1639978640000,
                        summonerLevel: 160
                    }
                };
                setUser(response.data);
                // const response = await axios.get(`/summoner/${username}`);
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
                <UserProfile
                    name={user.name}
                    profileIconUri={user.profileIconUri}
                    profileIconId={user.profileIconId}
                    summonerLevel={user.summonerLevel}
                />
            )}
            {user === false && (
                <StatusMessage text="오류가 발생했습니다." />
            )}
            {user === undefined && (
                <StatusMessage text="소환사 정보를 찾을 수 없습니다." />
            )}
        </>
    )
}

export default Histories;