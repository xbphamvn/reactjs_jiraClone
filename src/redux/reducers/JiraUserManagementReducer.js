import { ACT_JIRA_USER_MANAGEMENT_PUSH_USER_ARR_TO_REDUX } from "../constants/JiraUserManagement";

const initialState = {
    allUserArr: [],
}

export const JiraUserManagementReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_JIRA_USER_MANAGEMENT_PUSH_USER_ARR_TO_REDUX:
        return { ...state, allUserArr: action.userArr};

    default:
        return state;
    }
}
