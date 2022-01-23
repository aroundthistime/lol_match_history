import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import MatchesTable from '../../components/MatchesTable/MatchesTable';
import Spectator from '../../components/Spectator/Spectator';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserTiers from '../../components/UserTier/UserTiers/UserTiers';
import { useUser } from '../../queries/useUser';
import { SearchTargetUser } from '../../types/User/User';
import fakeData from './fakeData';


const Histories = (): JSX.Element => {
    const params = useParams();
    const { username } = params;
    const { isLoading, isError, data, refetch } = useUser(username);

    if (isLoading) {
        return <Loader />
    }
    return (
        <Histories.Success
            user={fakeData.data.user}
            refetch={refetch}
        />
    )
    if (isError) {
        return <StatusMessage text="오류가 발생했습니다." />
    }
    if (data) {
        return (
            <Histories.Success
                user={data}
                refetch={refetch}
            />
        )
    } else {
        return <StatusMessage text="소환사 정보를 찾을 수 없습니다." />
    }
    // return isLoading ? (
    //     <Loader />
    // ) : (
    //     <>
    //         <div></div>
    //         {/* {user && (

    //         )}
    //         {user === false && (
    //             <StatusMessage text="오류가 발생했습니다." />
    //         )}
    //         {user === null && (
    //             <StatusMessage text="소환사 정보를 찾을 수 없습니다." />
    //         )} */}
    //     </>
    // )
}

Histories.Success = ({ user, refetch }: { user: SearchTargetUser, refetch: Function }): JSX.Element => (
    <>
        <UserProfile
            name={user.name}
            profileIcon={user.profileIcon}
            summonerLevel={user.summonerLevel}
            refresh={refetch}
        />
        <UserTiers
            tiers={user.tiers}
        />
        {user.currentMatch && (
            <Spectator match={user.currentMatch} />
        )}
        <MatchesTable
            matches={user.latestMatches}
            summonerId={user.id}
            summonerPuuid={user.puuid}
        />
    </>
)

export default Histories;