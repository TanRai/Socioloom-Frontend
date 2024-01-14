import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <button className="chat__back__button">
          <ArrowBackIcon />
        </button>
        <h2>Tanvir Raiyan</h2>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">TanRai</span>
          This is a message
          <span className="chat__timestamp">Fri, 04 Sep 2020</span>
        </p>
      </div>

      <div></div>
      <div className="chat__footer">
        <div className="chat__input">
          <input placeholder="Start a new message" type="text" />
          <SendIcon className="chat__sendIcon" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
