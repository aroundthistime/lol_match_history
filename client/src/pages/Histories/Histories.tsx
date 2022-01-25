import React from 'react';
import { useParams } from 'react-router-dom';
import i18n from "i18next";
import Loader from '../../components/Loader/Loader';
import MatchesTable from '../../components/MatchesTable/MatchesTable';
import Spectator from '../../components/Spectator/Spectator';
import StatusMessage from '../../components/StatusMessage/StatusMessage';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserTiers from '../../components/UserTier/UserTiers/UserTiers';
import { useMatches } from '../../queries/useMatches';
import { useUser } from '../../queries/useUser';
import { EndedMatch } from '../../types/Match/Match';
import { SearchTargetUser } from '../../types/User/User';


const Histories = (): JSX.Element => {
    const params = useParams();
    const { username } = params;
    const {
        isLoading: isLoadingUser,
        isRefetching: isRefetchingUser,
        isError: isUserError,
        data: user,
        isFetched: userFetched,
        refetch
    } = useUser(username);
    const { isLoading: isLoadingMatches, data: matches } = useMatches(user?.puuid, user?.id, 1, userFetched);
    if (isLoadingUser || isRefetchingUser || isLoadingMatches) {
        return <Loader />
    }
    if (isUserError) {
        return <StatusMessage text={i18n.t('statusMessage.error')} />
    }
    if (user && matches) {
        return (
            <Histories.Success
                user={user}
                matches={matches}
                refetch={refetch}
            />
        )
    } else {
        return <StatusMessage text={i18n.t('statusMessage.noUser')} />
    }
}

Histories.Success = (
    { user, refetch, matches }
        : { user: SearchTargetUser, refetch: Function, matches: EndedMatch[] }
): JSX.Element => (
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
            matches={matches}
            summonerId={user.id}
            summonerPuuid={user.puuid}
        />
    </>
)

export default Histories;