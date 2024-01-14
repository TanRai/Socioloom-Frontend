import "./MessagesCard.css";
import profile from "./profile.jpg";

function MessagesCard() {
  return (
    <div className="messagesCard">
      <img src={profile} alt="" />
      <div className="messagesCard__details">
        <div>
          Safat sarwar <span>@Safatsarwar </span>&#183; <span>Oct 8,2023</span>{" "}
        </div>
        <div>Hello world</div>
      </div>
    </div>
  );
}

export default MessagesCard;
