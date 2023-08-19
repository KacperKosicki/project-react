import React from 'react';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../Redux/cardsRedux';
import clsx from 'clsx';

const Card = props => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  const cardClasses = clsx(styles.card, {
    [styles.favorite]: props.isFavorite,
  });

  return (
    <li className={cardClasses}>
      {props.title}
      <button onClick={handleToggleFavorite}>
        <i className={`fa ${props.isFavorite ? 'fa-trash' : 'fa-star-o'}`} />
      </button>
    </li>
  );
};

export default Card;