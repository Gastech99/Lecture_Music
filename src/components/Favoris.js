import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Favoris({favoris, music, addFavoris, deleteFavoris}) {
  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={favoris.artworkUrl100} className="card-img-top" alt="..." />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <h5 className="card-title">{favoris.artistName}</h5>
              <li className="list-group-item">{favoris.trackCensoredName}</li>
              <button
                className="btn btn-primary" onClick={() => deleteFavoris(favoris)}
              >
                Supprimer des favoris
              </button>
              {/**
               * Ajout et lecture de la musique avec ReactAudioPlayer
               */}
              <ReactAudioPlayer src={favoris.previewUrl} controls className="col-md-12 text-center mt-3" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favoris;
