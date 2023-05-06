import { connectToMetamask } from "../../web3/metamask";
import {  METASMK_CONNECT, METASMK_DISCONNECT } from "../actions-types";

export const connectToMetamaskAction = () => dispatch => {
    connectToMetamask().then(resp => {
        dispatch({ type: METASMK_CONNECT, payload: resp });
    }).catch(err => {
        dispatch({ type: METASMK_CONNECT, payload: err });
    })
}







export const disConnectToMetamaskAction = () => dispatch => {
    dispatch({ type: METASMK_DISCONNECT });
  
}




