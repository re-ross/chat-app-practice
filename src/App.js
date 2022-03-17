import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import MessageForm from "./components/MessageForm";
import MyMessage from "./components/MyMessage";
import TheirMessage from "./components/TheirMessage";

const App = () => {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="96c92568-a32a-46c6-8736-4678a69f6060"
        userName="reross"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

export default App;
