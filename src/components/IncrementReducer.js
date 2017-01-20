
const initialState = {
    counter: 0
};

export default function increment(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            let currentCount = state.counter;
            currentCount++;
            return { counter: currentCount };
        default:
            return state;
    }
}


