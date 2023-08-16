import React from 'react';
import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(state =>
    state.cards.filter(card => card.isFavorite)
  );

  console.log(favoriteCards);

  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      {favoriteCards.length > 0 ? (
        <ul className={styles.columnCard}>
          {favoriteCards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </ul>
      ) : (
        <p className={styles.noCards}>No favorite cards...</p>
      )}
    </div>
  );
};

export default Favorite;