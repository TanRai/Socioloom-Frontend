import "./InterestOption.css";

interface Props {
  follow: boolean;
  name: string;
}

function interestOption({ follow, name }: Props) {
  return (
    <div className="interestOption">
      <div className="interestOption__name">{name}</div>
      <button
        className={
          follow ? "interestOption__button__followed" : "interestOption__button"
        }
      >
        {follow ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
}

export default interestOption;
