import { METASMK_CONNECT, METASMK_DISCONNECT } from "../actions-types";

const initailUser = { chainId: null, account: null, balance: null }

export const connectToMetamaskReducer = (state = initailUser, action) => {
    switch (action.type) {
        case METASMK_CONNECT:
            if (action.payload.account) {
                localStorage.setItem("isMetamaskConnected", "true")
            }
            return action.payload;
        case METASMK_DISCONNECT:
            return initailUser
        default: return state

    }

}

