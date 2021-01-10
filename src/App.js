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
      <Switch>
        <JiraTemplate exact path="/home" Component={JiraHome} />
        <LoginTemplate exact path="/" Component={JiraLogin} />
      </Switch>
    </Route>
  );
}

export default App;
