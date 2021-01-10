import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { JiraCloneReducer } from './reducers/JiraCloneReducer';
import { JiraUserLoginedReducer } from './reducers/JiraUserLoginedReducer';
import { LoadingReducer } from './reducers/LoadingReducer';
import { rootSaga } from './sagas/rootSaga';

//setup saga
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    JiraCloneReducer,
    LoadingReducer,
    JiraUserLoginedReducer,
});

export const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);