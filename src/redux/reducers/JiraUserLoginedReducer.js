import { LOCALSTORAGE_USER_DATA_NAME } from "../../utils/constants/globalConsts"
import { ACT_UPDATE_USER_LOGINED_DATA } from "../constants/JiraCloneConsts"

const userData = JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_DATA_NAME)) ? JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_DATA_NAME)) : '';

const initialState = {
    loginedData: {
        accessToken: userData.accessToken,
        userData: userData
    }
}

export const JiraUserLoginedReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_UPDATE_USER_LOGINED_DATA:
        const {data} = action;
        return { ...state, loginedData: {...state.loginedData, accessToken: data.accessToken, userData: data.userData}};

    default:
        return { ...state};
    }
}
