import { IoMdClose } from "react-icons/io";
import "./EditProfileModal.css";
import { useContext, useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { LoggedContext } from "../App";
import cover from "./cover.jpg";
import profile from "./profile.jpg";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

interface Props {
  setOpenModal: (arg: boolean) => void;
}

function Modal({ setOpenModal }: Props) {
  const login = useContext(LoggedContext);

  const navigate = useNavigate();

  return (
    <div className="editProfileModalBackground">
      <form>
        <div className="editProfileModalContainer">
          <div className="editProfileModal__header">
            <div
              onClick={() => setOpenModal(false)}
              className="editProfileModalCloseIcon"
            >
              <CloseIcon fontSize="small" />
            </div>
            <div>Edit Profile</div>
            <button className="editProfileModal__savebtn">Save</button>
          </div>
          <div className="editProfileModal__body">
            <div className="editProfileModal__coverPhoto__conatiner">
              <img
                className="editProfileModal__coverphoto"
                src={cover}
                alt=""
              />
              <div className="editProfileModal__coverphoto__choose">
                <AddAPhotoIcon />
              </div>
            </div>
            <div className="editProfileModal__profilePhoto__conatiner">
              <div className="editProfileModal__profilePhoto__subconatiner">
                <img
                  className="editProfileModal__profilephoto"
                  src={profile}
                  alt=""
                />
                <div className="editProfileModal__profilephoto__choose">
                  <AddAPhotoIcon />
                </div>
              </div>
            </div>
            <label htmlFor="name">Name</label>
            <input
              className="editProfileModal__input"
              id="name"
              type="text"
              placeholder="Name"
            />
            <label htmlFor="bio">Bio</label>
            <textarea
              className="editProfileModal__input"
              id="bio"
              rows={2}
              placeholder="Bio"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
