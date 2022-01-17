import axios from "axios"

export const defineWhetherNoDataOrError = (error: any) => {
    if (axios.isAxiosError(error)
        && error.response
        && error.response.status === 404
    ) {
        return null
    } else {
        return false
    } //data가 없어서 axios 발생한 거면 null, 그렇지 않으면 false 리턴
}