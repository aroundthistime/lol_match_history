import RiotAPIGateWay from '../../RiotApiGateway'
import { GetUserUUIDRequestDTO } from './Request';
import { GetUserUUIDResponseDTO } from './Response';

export const getUserPUUID = async(params: GetUserUUIDRequestDTO): Promise<GetUserUUIDResponseDTO> => {
    const {
        summonerName,
        tagLine
    } = params

    const { data } = await RiotAPIGateWay.request(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${tagLine}`);
    return data;
}