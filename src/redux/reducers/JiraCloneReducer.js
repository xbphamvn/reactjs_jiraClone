import { ACT_PUSH_HISTORY_PROP_TO_REDUX } from "../constants/JiraCloneConsts";

const initialState = {
    history: {}
}

export const JiraCloneReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_PUSH_HISTORY_PROP_TO_REDUX:
        return { ...state, history: action.history };

    default:
        return { ...state };
    }
}
