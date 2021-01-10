import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { JiraCreateProjectReducer } from './reducers/JiraCreateProjectReducer';
import { JiraProjectManagementReducer } from './reducers/JiraProjectManagementReducer';
import { JiraPushHistoryToReduxReducer } from './reducers/JiraPushHistoryToReduxReducer';
import { JiraUserLoginedReducer } from './reducers/JiraUserLoginedReducer';
import { LoadingReducer } from './reducers/LoadingReducer';
import { rootSaga } from './sagas/rootSaga';

//setup saga
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    JiraPushHistoryToReduxReducer,
    LoadingReducer,
    JiraUserLoginedReducer,
    JiraCreateProjectReducer,
    JiraProjectManagementReducer,
});

export const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);