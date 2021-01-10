import { ACT_MANAGEMENT_GET_ALL_PROJECT_API } from "../constants/JiraCloneConsts";

const initialState = {
    allProjectArr: []
}

export const JiraProjectManagementReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_MANAGEMENT_GET_ALL_PROJECT_API:
        return { ...state, allProjectArr: action.allProjectArr };

    default:
        return state;
    }
}

