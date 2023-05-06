import { ADD_USER } from "../actions-types";

const initailUser = {
    data: null,
    isSuccess: false,
    message: null,
    error: null,
    statusCode: null
}

export const userReducer = (state = initailUser, action) => {
    switch (action.type) {
        case ADD_USER.ADD_USER_API_SUCCESS:
            console.log("this is success  ::  ", action.payload);

            return {
                data: action?.payload?.data?.data,
                message: action?.payload?.data?.message,
                isSuccess: action?.payload?.data?.isSuccess,
                error: action?.payload?.data?.error,
                statusCode: action.payload?.status
            }

        case ADD_USER.ADD_USER_API_FAIL:
            console.log("this is fail  ::  ", action.payload);
            return {
                data: action?.payload?.data?.data,
                message: action?.payload?.data?.message,
                isSuccess: action?.payload?.data?.isSuccess,
                error: action?.payload?.data?.error,
                statusCode: action?.payload?.status

            }
        default: return state

    }

}

