import React, { useEffect, useState } from "react";
import apiClient from "../services/api";
import Music from "./music";
import Favoris from "./Favoris";

function Search() {
  useEffect(() => {
    // Ajout de l'API

    console.log(list, "UseEffect");
  }, []);

  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    apiClient.get("?term=" + name + "&limit=25").then((response) => {
      setList(response.data.results);

      console.log(list, "Voir la liste");
    });
  };

  {
    /**
     * Ajout des musiques aux Favoris
     */
  }

  const [favoris, setFavoris] = useState([]);
  const addFavoris = (music) => {
    console.log(music, "music AddFavoris");

    setFavoris([...favoris, music]);
  };

  {
    /**
     * Suppression des musiques aux Favoris
     */
  }

  const deleteFavoris = (favoris_deleted) => {
    console.log(favoris_deleted, "deleteFavoris");
    setFavoris(favoris.filter((t) => t.trackId !== favoris_deleted.trackId));
  };

  return (
    <>
      <div className="container mb-3">
        <p>Rechercher une musique</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Entrer le nom d'un artiste"
              />
            </div>
            <div className="col-lg-4">
              <button className="btn btn-primary">Rechercher</button>
            </div>
          </div>
        </form>
      </div>

      <div className="container">
        <div className="row">
          {favoris.length > 0 && <p>Lite des Favoris</p>}
          {favoris.map((favoris, index) => (
            <Favoris
              favoris={favoris}
              key={index}
              deleteFavoris={deleteFavoris}
            />
          ))}
        </div>
      </div>

      {/**
        Affichage de la liste des musiques en les passant en props
       */}
      <div className="container">
        <div className="row ml-6">
          {list.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Music music={item} addFavoris={addFavoris} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
