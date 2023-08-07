import React, { useState } from 'react';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux'; 
import Button from '../Button/Button';

const SearchForm = () => {
    
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: inputValue, });
        setInputValue('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Search..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;