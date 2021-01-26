import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { JiraCreateProjectReducer } from './reducers/JiraCreateProjectReducer';
import { JiraDashboardReducer } from './reducers/JiraDashboardReducer';
import { JiraProjectManagementReducer } from './reducers/JiraProjectManagementReducer';
import { JiraPushHistoryToReduxReducer } from './reducers/JiraPushHistoryToReduxReducer';
import { JiraUserLoginedReducer } from './reducers/JiraUserLoginedReducer';
import { LoadingReducer } from './reducers/LoadingReducer';
import { CreateNewTaskFormReducer } from './reducers/ReducersComponents/JiraFormsReducers/CreateNewTaskFormReducer';
import { UpdateProjectFormReducer } from './reducers/ReducersComponents/JiraFormsReducers/UpdateProjectFormReducer';
import { JiraHOCDrawerReducer } from './reducers/ReducersHOC/JiraHOCDrawerReducer';
import { rootSaga } from './sagas/rootSaga';

//setup saga
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    JiraPushHistoryToReduxReducer,
    LoadingReducer,
    JiraUserLoginedReducer,
    JiraCreateProjectReducer,
    JiraProjectManagementReducer,
    //HOC Drawer
    JiraHOCDrawerReducer,
    //Update project after edit
    UpdateProjectFormReducer,
    //Create new task
    CreateNewTaskFormReducer,
    //PROJECT DASHBOARD
    JiraDashboardReducer,
});

export const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);