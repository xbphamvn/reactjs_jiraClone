import { ACT_PUSH_PROJECT_ITEM_DATA_TO_REDUX } from "../../../constants/JiraCloneConsts";

const initialState = {
    projectItemData: {
        id: 0,
        projectName: 'projectName',
        creator: 0,
        description: 'description',
        categoryId: '1'
    }
}

export const UpdateProjectFormReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_PUSH_PROJECT_ITEM_DATA_TO_REDUX:
        const {record} = action;
        return { ...state, projectItemData: {...state.projectItemData, id: record.id, projectName: record.projectName, creator: record.creator.id, description: record.description, categoryId: record.categoryId} };

    default:
        return state;
    }
}
