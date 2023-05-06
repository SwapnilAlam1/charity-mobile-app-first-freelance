import axios from "axios";
// import { API_BASE_URL } from "../../utils/constants";
const API_BASE_URL = "../../utils/constants";



export const http = {
    get: (endpoint) => {
        return new Promise((resolve, reject) => {
            axios.get(API_BASE_URL + endpoint).then(resp => {
                resolve(resp)
            }).catch(err => {
                reject(err)
            })
        })
    },

    post: (endpoint, payload) => {
        return new Promise((resolve, reject) => {
            axios.post(API_BASE_URL + endpoint, { payload }).then(resp => {
                resolve(resp)
            }).catch(err => {
                reject(err)
            })
        })
    }

}
