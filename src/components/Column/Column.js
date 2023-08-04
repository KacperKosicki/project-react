import React from 'react';
import styles from './Column.module.scss';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = props => {

  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} /> {props.title}
        <ul className={styles.cards}>
          {cards.map(card => (
            <Card key={card.id} title={card.title} />
          ))}
        </ul>
        <CardForm columnId={props.id} />
      </h2>
    </article>
  );
};

export default Column;