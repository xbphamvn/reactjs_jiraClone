import './App.css';
import 'antd/dist/antd.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import JiraHome from './pages/JiraHome/JiraHome';
import { JiraTemplate } from './templates/JiraTemplate/JiraTemplate';
import { LoginTemplate } from './templates/LoginTemplate/LoginTemplate';
import JiraLogin from './pages/JiraLogin/JiraLogin';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actPushHistoryPropToRedux } from './redux/actions/JiraCloneActions';
import JiraCreateProject from './pages/JiraCreateProject/JiraCreateProject';
import { JIRA_PATH_CREATE_PROJECT, JIRA_PATH_DASH_BOARD, JIRA_PATH_PROJECT_MANAGEMENT } from './utils/constants/globalConsts';
import JiraProjectManagement from './pages/JiraProjectManagement/JiraProjectManagement';
import JiraHOCDrawer from './HOC/JiraHOCDrawer/JiraHOCDrawer';
import JiraHOCModal from './HOC/JiraHOCModal/JiraHOCModal';

function App() {

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actPushHistoryPropToRedux(history));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Route>
      <LoadingOverlay />
      <JiraHOCDrawer />
      <JiraHOCModal />
      <Switch>
        <JiraTemplate exact path={JIRA_PATH_DASH_BOARD} Component={JiraHome} />
        <JiraTemplate exact path={JIRA_PATH_PROJECT_MANAGEMENT} Component={JiraProjectManagement} />
        <JiraTemplate exact path={JIRA_PATH_CREATE_PROJECT} Component={JiraCreateProject} />
        
        <LoginTemplate exact path="/" Component={JiraLogin} />
      </Switch>
    </Route>
  );
}

export default App;
