import { createStore } from 'redux'

function count (state=0, active) { 
    if (active.type === 'increment') { 
        return ++state;       
    } else if (active.type === 'decrement') {
        return --state;
    } else {
        return state
    }   
}
function goodlist (state=[], active) {
    let arr = [...state]    
    console.log(arr)
    if (active.type === 'goodlist') {     
        arr.push(active.data)       
    }
    return arr;
}

function render (state, active) {
    return {
        arr: goodlist(state.arr, active)
    }
}

let store = createStore(render,{count: 0, arr: ['']})
let active = {
    type: 'rudce'
}
function activeCerate (type) {
    return {
        type: type
    }
} 

export default store