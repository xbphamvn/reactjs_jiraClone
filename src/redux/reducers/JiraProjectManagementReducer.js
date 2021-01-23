import { ACT_PUSH_ONSEARCH_RESULT_ARR_TO_REDUX, ACT_MANAGEMENT_GET_ALL_PROJECT_API } from "../constants/JiraCloneConsts";

const initialState = {
    allProjectArr: [],
    addMemberResArr: [],
    projectMembers: []
}

export const JiraProjectManagementReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_MANAGEMENT_GET_ALL_PROJECT_API:
        return { ...state, allProjectArr: action.allProjectArr };

    case ACT_PUSH_ONSEARCH_RESULT_ARR_TO_REDUX:
        return {...state, addMemberResArr: action.onSearchResultArr};

    default:
        return state;
    }
}

