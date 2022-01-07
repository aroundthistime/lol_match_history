import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const Histories = (): JSX.Element => {
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const { username } = params;
    return loading ? (
        <Loader />
    ) : (
        <h1>Histories</h1>
    )
}

export default Histories;