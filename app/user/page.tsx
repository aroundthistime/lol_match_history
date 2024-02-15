import { getUserPUUID } from "../../src/api/user/puuid";

const SummonerPage = async({
    searchParams
}: {
    searchParams: SearchParams
}) => {
    const {
        summonerName,
        region
    } = searchParams;

    const {
        puuid
    } = await getUserPUUID({
        summonerName,
        tagLine: 'KR1'
    })

    return <p>{puuid}</p>
}

type SearchParams = {
    summonerName: string;
    region: string;
}

export default SummonerPage;