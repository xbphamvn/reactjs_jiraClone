import { ACT_CREATE_GET_PROJECT_CATEGORIES_API } from "../constants/JiraCloneConsts";

const initialState = {
    projectCategories: []
}

export const JiraCreateProjectReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACT_CREATE_GET_PROJECT_CATEGORIES_API:
            return { ...state, projectCategories: action.categoryArr };

        default:
            return state;
    }
}
