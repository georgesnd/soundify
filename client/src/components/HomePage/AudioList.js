import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "../HomePage/styles/MainContainer.css"
import MusicPlayer from "./MusicPlayer";
import { Songs } from "./Songs";

function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImage] = useState(Songs[0].imgSrc);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    const allSongs = document.querySelectorAll(".songs");
    function changeActive() {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{`${Songs.length} songs`}</span>
      </h2>

      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}{" "}
                    <span className="songSpan">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <FaHeadphones className="icons" />
                      60,000,123
                    </p>

                    <p className="duration">
                      <FaRegClock className="icons" />
                      03:04
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (
                        <FaHeart className="icons" />
                      ) : (
                        <FaRegHeart className="icons" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} autoplay={auto} />
    </div>
  );
}

export { AudioList };
