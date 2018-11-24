import * as TYPES from '../atcion-types'

function counter(state = { number: 0 }, action) {
    switch (action.type) {
        case TYPES.ADD:
            return { number: state.number + action.count }
            break;
        default:
            return state;
            break;
    }
}

export default counter