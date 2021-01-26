const initialState = {
    //
}

export const JiraCreateNewTaskReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'typeName':
        return { ...state };

    default:
        return state;
    }
}
