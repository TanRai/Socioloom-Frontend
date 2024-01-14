import { useContext } from "react";
import "./SidebarOption.css";
import { PathContext } from "../pages/Home";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

interface Props {
  active: boolean;
  text: string;
  Icon: any;
}

function SidebarOption({ active, text, Icon }: Props) {
  const setPath = useContext(PathContext);

  return (
    <div
      onClick={() => {
        setPath(text.toLowerCase());
      }}
      className={`sidebarOption ${active && `sidebarOption--active`}`}
    >
      <div className="icon">
        <Icon className="icon__icon" />
      </div>
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
