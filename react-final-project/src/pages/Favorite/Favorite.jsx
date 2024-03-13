import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import QuizCard from '../../components/Card/Card';
import creativeCard from '../../api/services/creativeCard';
import { FavoriteWrapper } from './styled';

const Favorite = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];

        // Запит для отримання всіх обраних карток
        const favoriteCardsData = await Promise.all(favoritesFromStorage.map(async (id) => {
          const card = await creativeCard.get(id);
          return card;
        }));

        setFavoriteCards(favoriteCardsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching and filtering quiz cards:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <FavoriteWrapper>
      {favoriteCards.map((card) => (
        <QuizCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </FavoriteWrapper>
  );
};

export default Favorite;
