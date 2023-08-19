import React from 'react';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../Redux/cardsRedux';
import clsx from 'clsx';

const Card = props => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  const handleRemove = () => {
    dispatch(removeCard(props.id));
  }

  const cardClasses = clsx(styles.card, {
    [styles.favorite]: props.isFavorite,
  });

  return (
    <li className={cardClasses}>
      <div className={styles.cardContent}>
        <p>{props.title}</p>
        <div className={styles.button}>
          <button onClick={handleToggleFavorite}>
            <i className='fa fa-star-o' />
          </button>
          <button onClick={handleRemove}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;