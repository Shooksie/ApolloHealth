import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './User/LoginForm';
import SignUp from './User/signupfrom';
import Inbox from './views/inbox';
import Messages from './views/messages';
import Home from './main';
import DocView from './views/docview';
import Scheduling from './views/scheduling';
import PharmView from './views/pharmview';
import ChatBot from './views/chatbot';
const RouterComponent = () => {
  return (
    <Router sceneStyle={{ marginBottom: 0 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Upstart" hideNavBar />
        <Scene key="register" component={SignUp} title="starting" hideNavBar />
      </Scene>
      <Scene key="main" initial>
        <Scene key="home" component={Home} hideNavBar initial />
        <Scene key="inbox" component={Inbox} hideNavBar={false} title="Inbox" />
        <Scene key="messages" component={Messages} hideNavBar={false} />
        <Scene key="docview" component={DocView} hideNavBar={false} title="Doctor" />
        <Scene key="pharmview" component={PharmView} hideNavBar={false} title="Pharmacy" />
        <Scene key="sched" component={Scheduling} hideNavBar={false} title="Appoinment" />
        <Scene key="chatbot" component={ChatBot} hideNavBar={false} title="Health Bot" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
