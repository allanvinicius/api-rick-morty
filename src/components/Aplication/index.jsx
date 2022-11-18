import { useEffect, useState } from "react";
import { CardCharacter } from "../CardCharacter";
import { Loader, SectionApi } from "./styles";
import { api } from "../../services/api";

import loader from "../../assets/loader.gif";

export function Aplication() {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [countPage, setCountPage] = useState("");
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    api.get(`/character?page=${page}`).then((response) => {
      const array = [...characters, ...response.data.results];
      setCharacters(array);

      setCount(response.data.info.count);
      setCountPage(response.data.info.pages);
      setIsLoader(false);
    });
  }, [page]);

  return (
    <>
      {isLoader && (
        <Loader>
          <img src={loader} title="loader" alt="loader" />
        </Loader>
      )}

      <SectionApi>
        <div className="container">
          <div className="top">
            <h1>Rick and Morty</h1>
            <span>Número de personagens: {count}</span>
          </div>

          <div className="grid-character">
            {characters &&
              characters.map(({ image, name, gender, species }, index) => (
                <CardCharacter
                  key={index}
                  image={image}
                  name={name}
                  gender={gender}
                  species={species}
                />
              ))}
          </div>

          {!(page === countPage) && (
            <button onClick={() => setPage(page + 1)}>Carregar mais</button>
          )}
        </div>
      </SectionApi>
    </>
  );
}
