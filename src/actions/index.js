import { OPEN, CHANGE_INDEX, RECORD_INDEX } from './types';

export const openSideMenu = () => {
    return {
        type: OPEN
    };
};

export const indexChange = (index) => {
    console.log('index change pressed');
    return {
        type: CHANGE_INDEX,
        payload: index
    };
};

export const recordCurrentIndex = (index) => {
    return {
        type: RECORD_INDEX,
        payload: index
    }
}
