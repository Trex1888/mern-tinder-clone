import "../styles/App.css";
import Header from "./Header";
import Cards from "./Cards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatScreen from "./ChatScreen";
import Chats from "./Chats";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <Cards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
