import "./Widgets.css";
import InterestOption from "./InterestOption";
import { useEffect, useState } from "react";
import API from "../services/axios";

function Widgets() {
  const [interests, setInterests] = useState<any[]>([]);

  useEffect(() => {
    API.get("/api/interests/user", {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    }).then((res: any) => {
      setInterests(res.data);
    });
  }, []);

  return (
    <div className="widgets">
      {/* <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Socioloom" type="text" />
      </div> */}
      <div className="widgets__interests">
        <div className="widgets__interests__header">Interests</div>
        {interests.map((interest) => (
          <InterestOption
            key={interest.interest_id}
            id={interest.interest_id}
            subscribed={interest.subscribed}
            name={interest.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Widgets;
