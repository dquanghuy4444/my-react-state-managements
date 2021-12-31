import { createStore, createHook } from 'react-sweet-state';

const initialState = {
    count: 0
}

const increment = (by = 1) => {
    return ({ setState, getState }) =>{
        setState({
            count: getState().count + by
        });
    }
}
const actions = {
    increment
}

const Store = createStore({
    initialState,
    actions,
    name: 'counter'
});

const useCounter = createHook(Store);


export default useCounter