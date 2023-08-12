import React from 'react';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../Redux/store';

const Card = props => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button onClick={handleToggleFavorite}>
        <i className={`fa ${props.isFavorite ? 'fa-star' : 'fa-star-o'}`} />
      </button>
    </li>
  );
};

export default Card;