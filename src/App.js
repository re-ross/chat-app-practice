import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import Login from "./components/Login";

const App = () => {
  if (!localStorage.getItem("username")) return <Login />;
  return (
    <ChatEngine
      height="100vh"
      projectID="96c92568-a32a-46c6-8736-4678a69f6060"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
