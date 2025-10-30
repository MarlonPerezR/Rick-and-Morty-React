import React, { useState } from "react";
import PropTypes from "prop-types";
import CharacterModal from "./CharacterModal";
import { motion, AnimatePresence } from "framer-motion";

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      episode: PropTypes.arrayOf(PropTypes.string).isRequired,
      origin: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  setCharacters: PropTypes.func.isRequired
};

export default function Characters(props) {
  const { characters, setCharacters } = props;
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // Animación para las cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  return (
    <div className="characters-container-centered">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="characters-title"
      >
        Characters
      </motion.h1>

      <motion.button 
        className="btns-of-page centered-btn" 
        onClick={() => setCharacters(null)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Back to Home
      </motion.button>

      <motion.div
        className="container-characters-centered"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {characters.map((character, index) => (
          <motion.div
            className="character-container"
            key={character.id}
            onClick={() => setSelectedCharacter(character)}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.08, 
              y: -8,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="character-image-container">
              <img src={character.image} alt={character.name} />
            </div>
            <div className="character-info">
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
                <span className="text-grey">Episodes: </span>
                <span className="episode-count">{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Specie: </span>
                <span className="species">{character.species}</span>
              </p>
              <p>
                <span className="text-grey">Gender: </span>
                <span className="gender">{character.gender}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <CharacterModal
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}