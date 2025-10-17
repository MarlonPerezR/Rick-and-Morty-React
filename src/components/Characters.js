import React, { useState } from "react";
import CharacterModal from "./CharacterModal";

export default function Characters(props) {
  const { characters, setCharacters } = props;
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <button className="btns-of-page" onClick={() => setCharacters(null)}>
        Volver a la home
      </button>

      <div className="container-characters">
        {characters.map((character, index) => (
          <div
            className="character-container"
            key={index}
            onClick={() => setSelectedCharacter(character)}
            style={{ cursor: "pointer" }}
          >
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                {character.episode.length}
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                {character.species}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="btns-of-page" onClick={() => setCharacters(null)}>
        Volver a la home
      </button>
      {/* Modal */}
      <CharacterModal
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </div>
  );
}
