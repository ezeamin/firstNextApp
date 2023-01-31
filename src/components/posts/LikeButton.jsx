'use client';
// Establece a este componente como de cliente
// Deben ser siempre componentes sencillos

// El useState es un hook que no se puede usar en el servidor
import { useState } from 'react';

import styles from './LikeButton.module.css';

// Este componente deberia ser de cliente
// eso quiere decir que puede interactuar con el usuario y acceder a la API del navegador
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked((state) => !state);
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      {liked ? '❤️' : '🤍'}
    </button>
  );
};

export default LikeButton;
