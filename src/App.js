import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import JiraHome from './pages/JiraHome/JiraHome';
import { JiraTemplate } from './templates/JiraTemplate/JiraTemplate';
import { LoginTemplate } from './templates/LoginTemplate/LoginTemplate';
import JiraLogin from './pages/JiraLogin/JiraLogin';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';

function App() {
  return (
    <BrowserRouter>
      <LoadingOverlay />
      <Switch>
        <JiraTemplate exact path="/" Component={JiraHome} />
        <LoginTemplate exact path="/login" Component={JiraLogin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
