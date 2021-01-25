const initialState = {
    //
}

export const CreateNewTaskFormReducer = (state = initialState, action) => {
    switch (action.type) {

    case '':
        return { ...state }

    default:
        return state
    }
}
