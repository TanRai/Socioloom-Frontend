import React, { useRef, useState } from "react";
import "./TweetBox.css";
import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "./CircularProgress";
import { FieldValues, set, useForm } from "react-hook-form";
import axios from "axios";

function TweetBox() {
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const myComponentRef = useRef<HTMLInputElement | null>(null);
  const [percent, setPercent] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    setCurrentImage(selectedFiles?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
  };

  const submitForm = (data: FieldValues) => {
    setIsSubmitting(true);
    console.log("Before append", data);
    console.log("Current image", currentImage);
    console.log("PostText", data.PostText);
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("PostPicture", currentImage as File);
    formData.append("PostText", data.PostText);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    axios
      .post("http://localhost:3000/api/posts", formData, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        console.log(res);
        setCurrentImage(undefined);
        setPreviewImage("");
        setIsSubmitting(false);
        setPercent(0);
        setIsValid(false);
        reset();
      });
  };
  console.log(isSubmitting || (!isValid && previewImage === ""));

  return (
    <div className="tweetBox">
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <div className="tweetBox__input">
          <Avatar />
          <input
            {...register("PostText")}
            placeholder="What's happening?"
            type="text"
            onChange={(data) => {
              setPercent((data.target.value.length / 300) * 100);
              if (
                data.target.value.length > 0 &&
                data.target.value.length <= 300
              ) {
                setIsValid(true);
              } else {
                setIsValid(false);
              }
            }}
            autoComplete="off"
          />
        </div>
        {previewImage && (
          <div className="tweetBox__preview">
            <img
              className="tweetBox__preview__image"
              src={previewImage}
              alt=""
            />
            <div
              onClick={() => {
                setPreviewImage("");
                setCurrentImage(undefined);
              }}
              className="tweetBox__preview__close"
            >
              <CloseIcon fontSize="small" />
            </div>
          </div>
        )}
        <div className="tweetBox__footer">
          <div
            onClick={() => {
              if (myComponentRef && myComponentRef.current) {
                (myComponentRef.current as HTMLInputElement).click();
              }
            }}
            className="tweetBox__photoIcon"
          >
            {!previewImage && <PhotoIcon />}
            <input
              ref={myComponentRef}
              style={{ display: "none" }}
              onChange={selectImage}
              className="tweetBox__photoInput"
              type="file"
              accept="image/*"
            />
          </div>
          <CircularProgress percent={percent} />
          <button
            disabled={isSubmitting || (!isValid && previewImage === "")}
            type="submit"
            className="tweetBox__tweetButton"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
