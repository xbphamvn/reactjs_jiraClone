const initialState = {
    //
}

export const JiraCloneReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'typeName':
        return { ...state };

    default:
        return { ...state };
    }
}
