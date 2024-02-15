import axios, { AxiosRequestConfig } from "axios"

const request = async(url: string, config: AxiosRequestConfig = {}) => {
    return axios.get(url, {
        ...config,
        headers: {
            ...config?.headers,
            "X-Riot-Token": process.env.API_KEY
        }
    })
}

/**
 * Gateway for communicating with Riot APIs
 */
const RiotAPIGateWay = {
    request
}

export default RiotAPIGateWay;