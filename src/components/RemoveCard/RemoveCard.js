import styles from './CardRemove.module.scss';
import Button from './../Button/Button';

const CardRemover = ({ onRemove }) => {
  return (
    <div className={styles.cardRemover}>
      <Button icon="minus" />
    </div>
  );
};

export default CardRemover;