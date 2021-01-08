import { ACT_DISPLAY_LOADING_OVERLAY, ACT_HIDE_LOADING_OVERLAY } from "../constants/LoadingConsts";

const initialState = {
    isLoading: false
}

export const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_DISPLAY_LOADING_OVERLAY:
        return { ...state, isLoading: true };

    case ACT_HIDE_LOADING_OVERLAY:
            return { ...state, isLoading: false };

    default:
        return { ...state };
    }
}
