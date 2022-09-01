import { useSelector, useDispatch } from 'react-redux'
import {Input,Label} from "./Filter.styled";
import { setFilter } from "components/redux/features/filterSlice";

export const Filter = () => {
   const value = useSelector(state => state.filter.value);
    const dispatch = useDispatch();
    
    const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value))
    };

    return (<Label>Find contacts by name
        <Input
            type="text"
            name='filter'
            value={value}
            onChange={handleChangeFilter}
        />
    </Label>);
};

