import React, { useContext, useState } from "react";
import "./style.css";
import SideNav from "../../Components/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import MyContext from "../../Utils/contextApi/MyContext";
import { ReactComponent as PlayButton } from "../../Utils/images/Vector.svg";
import { ReactComponent as DeleteIcon } from "../../Utils/images/DeleteOutlined.svg";
import AudioPlayer from "../../Components/AudioPlayer/AudioPlayer";
import defaultimage from "../../Utils/images/Mask Group.png";

// import "react-table/react-table.css";

function HomeScreen() {
  const { myState, updateState } = useContext(MyContext);
  const [playMusic, setplayMusic] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  // Calculate the index of the first and last items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myState.slice(indexOfFirstItem, indexOfLastItem);

  const handelOnPlayAudioTable = (index) => {
    setplayMusic(index);
  };

  const deleteSong = (index) => {
    updateState(myState.filter((e, i) => i !== index));
  };
  const playNext = () => {
    if (myState?.length - 1 >= playMusic) setplayMusic((e) => ++e);
  };

  const playPrev = () => {
    if (playMusic >= 1) setplayMusic((e) => --e);
  };
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={"home-screen-container"}>
      <SideNav />
      <div className={"main-content-container"}>
        <div>
          <Header />
          <div className={"tabel-content"}>
            <table>
              <thead>
                <tr>
                  <th>Song Name</th>
                  <th>Source</th>
                  <th>Added ON</th>
                  <th>{"   "}</th>
                  <th>{"   "}</th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((value, key) => {
                  return (
                    <tr key={key}>
                      <td className={"centring"}>
                        {value?.imageURL ? (
                          <img src={value?.imageURL} width={66} height={66} />
                        ) : (
                          <img src={defaultimage} alt={"default"} />
                        )}

                        <span className={"mr-10"}>{value?.songName}</span>
                        {value?.songName}
                      </td>
                      <td>{value?.songSource}</td>
                      <td>{value?.addedOn}</td>
                      <td
                        className={"padded-area"}
                        onClick={() => handelOnPlayAudioTable(key)}
                      >
                        <PlayButton />
                      </td>
                      <td
                        className={"padded-area"}
                        onClick={() => deleteSong(key)}
                      >
                        <DeleteIcon />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Pagination controls */}
          <div className="pagination-container">
            <button
              className="page_button"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>{currentPage}</span>
            <button
              className="page_button"
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= myState.length}
            >
              Next
            </button>
          </div>
        </div>
        <div>
          <AudioPlayer
            playable_song={myState[playMusic]}
            playNextSong={() => playNext()}
            playPrevSong={() => playPrev()}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
