import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { JiraCreateProjectReducer } from './reducers/JiraCreateProjectReducer';
import { JiraDashboardReducer } from './reducers/JiraDashboardReducer';
import { JiraProjectManagementReducer } from './reducers/JiraProjectManagementReducer';
import { JiraPushHistoryToReduxReducer } from './reducers/JiraPushHistoryToReduxReducer';
import { JiraUserLoginedReducer } from './reducers/JiraUserLoginedReducer';
import { JiraUserManagementReducer } from './reducers/JiraUserManagementReducer';
import { LoadingReducer } from './reducers/LoadingReducer';
import { JiraDetailTaskCommentReducer } from './reducers/ReducersComponents/JiraDetailReducers/JiraDetailTaskCommentReducer';
import { JiraDetailTaskItemReducer } from './reducers/ReducersComponents/JiraDetailReducers/JiraDetailTaskItemReducer';
import { CreateNewTaskFormReducer } from './reducers/ReducersComponents/JiraFormsReducers/CreateNewTaskFormReducer';
import { UpdateProjectFormReducer } from './reducers/ReducersComponents/JiraFormsReducers/UpdateProjectFormReducer';
import { JiraHOCDrawerReducer } from './reducers/ReducersHOC/JiraHOCDrawerReducer';
import { JiraHOCModalReducer } from './reducers/ReducersHOC/JiraHOCModalReducer';
import { rootSaga } from './sagas/rootSaga';

//setup saga
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    JiraPushHistoryToReduxReducer,
    LoadingReducer,
    JiraUserLoginedReducer,
    JiraCreateProjectReducer,
    JiraProjectManagementReducer,
    //HOC Drawer, Modal
    JiraHOCDrawerReducer,
    JiraHOCModalReducer,
    //Update project after edit
    UpdateProjectFormReducer,
    //Create new task
    CreateNewTaskFormReducer,
    //TASK COMMENTS
    JiraDetailTaskCommentReducer,
    //PROJECT DASHBOARD
    JiraDashboardReducer,
    //Icon for task detail
    JiraDetailTaskItemReducer,
    //Get all user array
    JiraUserManagementReducer,
    
});

export const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);