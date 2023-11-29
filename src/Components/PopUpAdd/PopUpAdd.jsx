import React, { useContext, useState } from "react";
import "./style.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ReactComponent as UploadIcon } from "../../Utils/images/Union.svg";
import MyContext from "../../Utils/contextApi/MyContext";
function PopUpAdd() {
  let currentDate = new Date().toDateString();
  const [song, setSong] = useState({
    songName: "",
    songLink: "",
    songSource: "",
    imageURL: "",
    addedOn: currentDate,
  });
  const { myState, updateState } = useContext(MyContext);

  const handelOnChange = (e) => {
    if (e?.target?.name !== "imageURL")
      setSong({ ...song, [e?.target?.name]: e.target.value });
    else
      setSong({
        ...song,
        [e?.target?.name]: URL.createObjectURL(e.target.files[0]),
      });
  };
  const clearPhoto = () => {
    setSong({ ...song, imageURL: "" });
  };

  const addSong = () => {
    updateState([...myState, song]);
  };
  let disabledBut =
    song?.songName !== "" &&
    song?.songLink !== "" &&
    song?.songSource !== "" &&
    song?.imageURL !== "" &&
    song?.addedOn !== "";

  return (
    <div>
      {" "}
      <Popup
        trigger={<button className={"yellow-header-button"}>Add Songs</button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <div className={"pop-up-container"}>
              <div className="typo-add-song">Add Song</div>
              <div>
                <span className={"cursor"} onClick={() => close()}>
                  X
                </span>
              </div>
            </div>
            <div className={"input-container"}>
              <div className={"input-hero"}>
                <label className={"typo-input-label"}>Song Name</label>
                <input
                  type={"text"}
                  className={"input-full-width"}
                  value={song?.songName}
                  name={"songName"}
                  onChange={handelOnChange}
                />
              </div>
              <div className={"input-hero"}>
                <label className={"typo-input-label"}>Song link</label>
                <input
                  type={"text"}
                  className={"input-full-width"}
                  value={song?.songLink}
                  name={"songLink"}
                  onChange={handelOnChange}
                />
              </div>
              <div className={"input-hero"}>
                <label className={"typo-input-label"}>Song Source</label>
                <input
                  type={"text"}
                  className={"input-full-width"}
                  value={song?.songSource}
                  name={"songSource"}
                  onChange={handelOnChange}
                />
              </div>
              <div className={"input-hero"}>
                <label for="imageURL" className="labler">
                  <UploadIcon />
                  <span className="m-10">
                    Click to Upload Profile Thumbnail
                  </span>
                </label>
                <input
                  type={"file"}
                  className={"inputfile"}
                  name={"imageURL"}
                  id="imageURL"
                  onChange={handelOnChange}
                />
              </div>
              {song?.imageURL && (
                <div className={"img-adjust"}>
                  <img src={song?.imageURL} width={40} height={40} alt={song?.songName}/>
                  <span className="m-10" onClick={clearPhoto}>
                    x
                  </span>
                </div>
              )}
              <div className={"disclaimer-text-add"}>
                Image has to be of aspect ratio 1:1 with a size of 3000 pixels x
                3000 pixels
              </div>
              <div className={"pop-up-container-footer"}>
                <button className={"button-cancel"} onClick={() => close()}>
                  Cancel
                </button>
                <button
                  className="button-add"
                  disabled={!disabledBut}
                  onClick={() => {
                    addSong();
                    close();
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopUpAdd;
