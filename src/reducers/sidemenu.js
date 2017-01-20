import { OPEN } from '../actions/types';

const initialState = {
    isOpen: false
};

export default function sidebar(state = initialState, action) {
    switch (action.type) {
        case OPEN:
            return {...state, isOpen: !state.isOpen };
        default: 
            return state;
    }
}