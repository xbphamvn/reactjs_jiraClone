import { ACT_DISPLAY_LOADING_OVERLAY, ACT_HIDE_LOADING_OVERLAY } from "../constants/LoadingConsts";

export const actDisplayLoadingOverlay = () => ({
    type: ACT_DISPLAY_LOADING_OVERLAY
});

export const actHideLoadingOverlay = () => ({
    type: ACT_HIDE_LOADING_OVERLAY
});