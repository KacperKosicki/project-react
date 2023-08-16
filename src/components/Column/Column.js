import React from 'react';
import styles from './Column.module.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { getFilteredCards } from '../../Redux/store';

const Column = (props) => {

  const cards = useSelector(state => getFilteredCards(state, props.id));
  
  //const searchString = useSelector((state) => state.searchString);
  
  //const cards = useSelector((state) => state.cards.filter((card) => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase())));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} /> {props.title}
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} />
          ))}
        </ul>
        <CardForm columnId={props.id} />
      </h2>
    </article>
  );
};

export default Column;