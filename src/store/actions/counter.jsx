import * as TYPES from '../atcion-types'
export default {
    add(val){
        return {type:TYPES.ADD,count:val}
    }
}