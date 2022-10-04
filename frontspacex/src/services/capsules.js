import axios from 'axios'

export const getCapsules = async () => {

    const res = await axios.get(`https://api.spacexdata.com/v3/capsules`);

    console.log(res.data);

    return res.data;
};