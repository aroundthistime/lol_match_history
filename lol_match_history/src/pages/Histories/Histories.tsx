import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import noResultImage from "../../assets/images/no-result.png";

const Histories = (): JSX.Element => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const params = useParams();
    const { username } = params;

    const fetchUser = async () => {
        if (username) {
            // const response = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}`);

        }
        setLoading(false);
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return loading ? (
        <Loader />
    ) : (
        <div className="status-message no-result no-drag">
            <img
                src={noResultImage}
                alt="검색 실패"
                className="no-result__image"
            />
            <h4 className="status-message__text no-result__text">소환사 정보를 찾을 수 없습니다.</h4>
        </div>
        // <h1>Histories</h1>
    )
}

export default Histories;