import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, runTransaction } from "firebase/database";
import { db } from "../lib/firebase";

function LikeButton({ slug }) {
  const [likes, setLikes] = useState(0);

  // Inicializa la referencia de Firebase para los "likes"
  useEffect(() => {
    const likesRef = ref(db, `posts/${slug}/likes`);
    
    // Escucha los cambios en los "likes" en tiempo real
    onValue(likesRef, (snapshot) => {
      setLikes(snapshot.val() || 0); // Actualiza el estado con el valor de "likes"
    });
  }, [slug]);

  // Función para aumentar los "likes"
  const handleLike = () => {
    const likesRef = ref(db, `posts/${slug}/likes`);
    
    // Realiza una transacción para incrementar los "likes"
    runTransaction(likesRef, (currentLikes) => {
      return (currentLikes || 0) + 1;
    });
  };

  return (
    <button 
      onClick={handleLike} 
      className="bg-stone-950 text-white border-2 border-black px-6 py-3 rounded-lg shadow-md hover:bg-stone-800 hover:text-white hover:border-gray-500 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"

    >
      🖤 {likes} Likes
    </button>
  );
}

export default LikeButton;
