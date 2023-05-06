import { ADD_USER } from "../actions-types";
import { http } from "../apis/http";

export const addUserAction = () => dispatch => {
    http.get("/Nft/GetHotCollections").then(resp => {
        dispatch({ type: ADD_USER.ADD_USER_API_SUCCESS, payload: resp });
    }).catch(err => {
        dispatch({ type: ADD_USER.ADD_USER_API_FAIL, payload: err.response });
    })

}