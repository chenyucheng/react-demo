import * as TYPES from '../atcion-types'
export default {
    add_todo(val){
        return {type:TYPES.ADD_TODO,todo:val}
    }
}