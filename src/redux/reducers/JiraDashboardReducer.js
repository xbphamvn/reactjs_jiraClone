import { ACT_PROJECT_DASHBOARD_GET_PROJECT_DETAIL } from "../constants/JiraCloneConsts"

const initialState = {
    projectDetail: {}
}

export const JiraDashboardReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_PROJECT_DASHBOARD_GET_PROJECT_DETAIL:
        return { ...state, projectDetail: action.projectDetail }

    default:
        return state
    }
}
