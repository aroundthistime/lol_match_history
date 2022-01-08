const { default: axios } = require('axios');
require('dotenv').config()
var express = require('express');

const app = express();

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(4000, () => console.log("Server running"));

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // // Request methods you wish to allow
//     // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // // Request headers you wish to allow
//     // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // // Set to true if you need the website to include cookies in the requests sent
//     // // to the API (e.g. in case you use sessions)
//     // res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.get('/summoner/:username', async (req, res) => {
    const {
        params: { username }
    } = req;
    // console.log(username);
    try {
        const url = encodeURI(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.API_KEY}`)
        const response = await axios.get(url);
        // console.log("status : ", response.status);
        // console.log("data ; ", response.data);
        console.log(response.data);
        let result; //fetch 결과
        if (response.status === 200) {
            result = true; //성공
        } else if (response.status === 404) {
            result = null; //해당 소환사 없음
        } else {
            result = false; //그 외의 이유로 fetch 실패
        }
        res.json({
            result,
            ...response
        })
    } catch (error) {
        console.log(error);
        res.json({
            result: false,
        })
    }

})