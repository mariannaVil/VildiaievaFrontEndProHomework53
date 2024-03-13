import {
  Card, CardActions, CardContent, CardMedia, Button, Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper, DescriptionTypography } from './styled';
import QuizModal from '../Modals/QuizModal';
import BaseModal from '../Modals/BaseModal';

const QuizCard = ({
  id, image, title, description,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // Читання обраних карток з локального сховища при завантаженні компонента
  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favoritesFromStorage.includes(id));
  }, [id]);

  // Оновлення локального сховища при зміні стану обраних карток
  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = isFavorite
      ? [...favoritesFromStorage, id]
      : favoritesFromStorage.filter((favId) => favId !== id);

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }, [isFavorite, id]);

  const handleStartClick = () => navigate(`/quizCards/${id}`);
  const handleShowClick = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <>
      <CardWrapper data-testid='cardWrapper'>
        <Card>
          <CardMedia
           sx={{
             height: 150,
             '@media (max-width: 600px)': {
               height: 100,
             },
           }}
            image={image}
            title={title}
            description={description}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <DescriptionTypography variant='body2' color='text.secondary'>
              {description}
            </DescriptionTypography>
          </CardContent>
          <CardActions>
            <Button className='start' size='small' onClick={handleStartClick}>
              Start quiz
            </Button>
            <Button className='show' size='small' onClick={handleShowClick}>
              Show More
            </Button>
            <Button className='favorite' size='small'onClick={handleFavorite}>
              {isFavorite ? '❤️' : '🤍'}
            </Button>
          </CardActions>
        </Card>
      </CardWrapper>
      <QuizModal isOpen={openModal} handleClose={handleClose}>
        <BaseModal
          image={image}
          title={title}
          description={description}
        />
      </QuizModal>
    </>
  );
};
export default QuizCard;
