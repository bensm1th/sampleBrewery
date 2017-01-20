import { CHANGE_INDEX, RECORD_INDEX } from '../actions/types';

const initialState = {
    index: 0,
    currentIndex: 0
};

export default function swiper(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INDEX:
            return { ...state, index: action.payload };
        case RECORD_INDEX:
            return { ...state, currentIndex: action.payload };
        default:
            return state;
    }
}