import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [characters, setCharacters] = useState(null);
  
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <motion.h1 
          className='title'
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.5, 
            type: "spring", 
            stiffness: 50,
            damping: 10
          }}
        >
          Rick and Morty
        </motion.h1>
        
        <AnimatePresence mode='wait'>
          {characters ? (
            <motion.div
              key="characters"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="characters-wrapper"
            >
              <Characters 
                characters={characters} 
                setCharacters={setCharacters}
              />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="home-container"
            >
              <motion.img 
                src={imageRickMorty} 
                alt='Rick and Morty' 
                className='img-home'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { 
                    duration: 1.2,
                    delay: 0.3
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
              
              <motion.button 
                onClick={reqApi} 
                className='btns-of-page'
                initial={{ y: 50, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    duration: 0.8,
                    delay: 0.6
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Search Characters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default App;