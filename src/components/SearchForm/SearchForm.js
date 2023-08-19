import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import { useSelector, useDispatch } from 'react-redux'; 
import Button from '../Button/Button';
import { updateSearchString } from '../../Redux/searchStringRedux';

const SearchForm = () => {
    
    const dispatch = useDispatch();
    const searchString = useSelector(state => state.searchString);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Search..." value={searchString} onChange={e => dispatch(updateSearchString(e.target.value))} />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;