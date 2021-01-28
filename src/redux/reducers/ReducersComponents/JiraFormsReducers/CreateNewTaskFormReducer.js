import { ACT_SET_ALL_MEMBER_BY_PROJECT_ID_TO_REDUX, ACT_SET_ALL_PRIORITY_TYPES_TO_REDUX, ACT_SET_ALL_PROJECTS_ARR_TO_REDUX, ACT_SET_ALL_TASK_STATUS_TO_REDUX, ACT_SET_ALL_TASK_TYPES_TO_REDUX, ACT_SET_MEMBER_PROJECT_BY_ID_DEFAULT_TO_REDUX } from "../../../constants/JiraCreateNewTaskConsts"

const initialState = {
    priorityArr: [],
    projectArr: [],
    taskTypeArr: [],
    taskStatusArr: [],
    memberArr: []
}

export const CreateNewTaskFormReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACT_SET_ALL_PRIORITY_TYPES_TO_REDUX:
            return { ...state, priorityArr: action.priorityArr };

        case ACT_SET_ALL_PROJECTS_ARR_TO_REDUX:
            return { ...state, projectArr: action.projectArr };

        case ACT_SET_ALL_TASK_TYPES_TO_REDUX:
            return { ...state, taskTypeArr: action.taskTypeArr };

        case ACT_SET_ALL_TASK_STATUS_TO_REDUX:
            return { ...state, taskStatusArr: action.taskStatusArr };

        case ACT_SET_ALL_MEMBER_BY_PROJECT_ID_TO_REDUX:
            return { ...state, memberArr: action.memberArr };

        case ACT_SET_MEMBER_PROJECT_BY_ID_DEFAULT_TO_REDUX:
            return {...state, memberArr: action.memberArrDefault};

        default:
            return state;
    }
}
