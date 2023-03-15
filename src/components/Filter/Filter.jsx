import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getVisibleContact } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <FilterLabel htmlFor="">
        Find contacts by name
        <FilterInput
          type="text"
          onChange={e => dispatch(getVisibleContact(e.target.value))}
        />
      </FilterLabel>
    </>
  );
};

export default Filter;
