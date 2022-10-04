import axios from 'axios'

export const getLaunches = async () => {

    const res = await axios.get(`https://api.spacexdata.com/v3/launches`);

    console.log(res.data);

    return res.data;
};