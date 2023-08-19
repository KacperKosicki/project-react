import React, { useState } from 'react';
import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../Redux/listsRedux';

const ListForm = () => {
    
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.title}>Title: </span><TextInput placeholder="Add list title..." value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.description}>Description: </span><TextInput placeholder="Add list description..." value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
        </form>
    );
};

export default ListForm;