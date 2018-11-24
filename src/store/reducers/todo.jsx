import * as TYPES from '../atcion-types'

function todo (state=[],atcion){
    switch (atcion.type) {
        case TYPES.ADD_TODO:
            return [...state,atcion.todo];
            break;
        default:
            return state;
            break;
    }
}

export default todo