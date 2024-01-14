import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import "./Home.css";
import Widgets from "../Components/Widgets";
import { createContext, useContext, useEffect, useState } from "react";
import Profile from "../Components/Profile";
import Explore from "../Components/Explore";
import { useLocation, useNavigate } from "react-router-dom";
import Messages from "../Components/Messages";
import Chat from "../Components/Chat";
import PostView from "../Components/PostView";
import Notifications from "../Components/Notifications";
import Bookmarks from "../Components/Bookmarks";

export const PathContext = createContext((path: string) => {});

interface Props {
  urlPath?: string;
}

function Home({ urlPath }: Props) {
  const navigate = useNavigate();

  const [path, setPath] = useState(urlPath ? urlPath : "home");
  let location = useLocation();

  useEffect(() => {
    console.log("DIEEEEEE!!!!");
    console.log("HERE = " + location.pathname);
    if (location.pathname === "/" || location.pathname === "/home") {
      console.log("HERE TO HOME");
      setPath("home");
    } else if (location.pathname === "/profile") {
      setPath("profile");
    } else if (location.pathname === "/explore") {
      setPath("explore");
    } else if (location.pathname === "/messages") {
      setPath("messages");
    } else if (location.pathname === "/chat") {
      setPath("chat");
    } else if (location.pathname === "/notifications") {
      setPath("notifications");
    } else if (location.pathname === "/bookmarks") {
      setPath("bookmarks");
    }
  }, [location]);

  return (
    <PathContext.Provider
      value={(path: string) => {
        //setPath(path);
        navigate(`/${path}`);
      }}
    >
      <div className="home">
        <Sidebar />
        {path === "home" && <Feed />}
        {/* {path === "home" && <PostView />} */}
        {path === "profile" && <Profile />}
        {path === "explore" && <Explore />}
        {path === "messages" && <Messages />}
        {path === "chat" && <Chat />}
        {path === "notifications" && <Notifications />}
        {path === "bookmarks" && <Bookmarks />}
        <Widgets />
      </div>
    </PathContext.Provider>
  );
}

export default Home;
