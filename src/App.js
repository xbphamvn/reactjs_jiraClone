import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import JiraHome from './pages/JiraHome/JiraHome';
import { JiraTemplate } from './templates/JiraTemplate/JiraTemplate';
import { LoginTemplate } from './templates/LoginTemplate/LoginTemplate';
import JiraLogin from './pages/JiraLogin/JiraLogin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <JiraTemplate exact path="/" Component={JiraHome} />
        <LoginTemplate exact path="/login" Component={JiraLogin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
