import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../Redux/store';

const ColumnForm = ({ listId }) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
     };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.title}>Title: </span><TextInput placeholder="Add column title..." value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.icon}>Icon: </span><TextInput placeholder="Add column icon..." value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;