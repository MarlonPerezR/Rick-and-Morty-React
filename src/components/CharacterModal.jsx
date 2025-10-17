// src/components/CharacterModal.jsx
import React from "react";
import "./CharacterModal.css"; // opcional si quieres estilos aparte

export default function CharacterModal({ character, onClose }) {
  if (!character) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p><strong>Estado:</strong> {character.status}</p>
        <p><strong>Especie:</strong> {character.species}</p>
        <p><strong>Origen:</strong> {character.origin.name}</p>
        <p><strong>Episodios:</strong> {character.episode.length}</p>
      </div>
    </div>
  );
}
