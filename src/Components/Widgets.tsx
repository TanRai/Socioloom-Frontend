import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import InterestOption from "./InterestOption";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Socioloom" type="text" />
      </div>
      <div className="widgets__interests">
        <div className="widgets__interests__header">Interests</div>
        <InterestOption name="Politics" follow={false} />
        <InterestOption name="Gaming" follow={false} />
        <InterestOption name="Movies" follow={false} />
        <InterestOption name="Lifestyle" follow={true} />
      </div>
    </div>
  );
}

export default Widgets;
