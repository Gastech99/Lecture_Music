import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

function Music({ music, addFavoris }) {

  

  useEffect(() => {

  },)

  return (
    <>
      <div className="col-md-2">
        <div className="card" style={{ width: "18rem" }}>
          <img src={music.artworkUrl100} className="card-img-top" alt="..." />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <h5 className="card-title">{music.artistName}</h5>
              <li className="list-group-item">{music.trackCensoredName}</li>
              <button className="btn btn-primary" onClick={() => addFavoris(music)}>Ajouter aux favoris</button>
              {/**
               * Ajout et lecture de la musique avec ReactAudioPlayer
               */}
              <ReactAudioPlayer src={music.previewUrl} controls className="col-md-12 text-center mt-3" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
