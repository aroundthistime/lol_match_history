import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import MatchesTable from '../../components/MatchesTable/MatchesTable';
import Spectator from '../../components/Spectator/Spectator';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserTiers from '../../components/UserTier/UserTiers/UserTiers';
import { SearchTargetUser } from '../../types/User/User';
import fakeData from './fakeData';


const Histories = (): JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<SearchTargetUser | undefined | false>();
    const params = useParams();
    const { username } = params;

    const fetchUser = async () => {
        setLoading(true);
        if (username) {
            try {
                const response = fakeData;
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
                    {user.currentMatch && (
                        <Spectator match={user.currentMatch} />
                    )}
                    <MatchesTable matches={user.latestMatches} />
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