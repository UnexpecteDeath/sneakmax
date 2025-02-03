import axios from "axios";


export const initial = axios.create({
    baseURL: "https://164285a9c82aad68.mokky.dev/"
})


// "https://164285a9c82aad68.mokky.dev/sneakers?page=1&limit=6&price[from]=1850&price[to]=11799.08"