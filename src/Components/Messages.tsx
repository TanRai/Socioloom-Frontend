import SearchIcon from "@mui/icons-material/Search";
import "./Messages.css";
import MessagesCard from "./MessagesCard";

function Messages() {
  return (
    <div className="messages">
      <div className="messages__header">
        <h2>Messages</h2>
      </div>
      <div className="messages__input">
        <SearchIcon className="messages__searchIcon" />
        <input placeholder="Search Direct Messages" type="text" />
      </div>
      <MessagesCard />
      <MessagesCard />
      <MessagesCard />
      <MessagesCard />
    </div>
  );
}

export default Messages;
