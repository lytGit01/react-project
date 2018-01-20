import {combineReducers} from 'redux'
import React,{Component} from 'react'

function count (state=[], active) {
    if (active.type === 'caseIn') { 
        state.push(active.val)
        return state;       
    } else if (active.type === 'caseDe') {
        let idx = null;
        for(let [val,ind] of state){
            if(val === active.val){
                idx = ind
            }
        }
        state.splice(active.idx, 1)  
        return state;
    } else {
        return state
    }   
}
function food (state=[], active) {
    if (active.type === 'foodIn') {
        console.log(active) 
        state.push(active.val)
        return state;       
    } else if (active.type === 'foodDe') {
        let idx = null;
        for(let [val,ind] of state){
            if(val === active.val){
                idx = ind
            }
        }
        state.splice(active.idx, 1)  
        return state;
    } else {
        return state
    }   
}
function dislike (state=[], active) {
    if (active.type === 'dislikeIn') {
        state.push(active.val)
        console.log(state) 
        return state;       
    } else if (active.type === 'dislikeDe') {
        let idx = null;
        for(let [val,ind] of state){
            if(val === active.val){
                idx = ind
            }
        }
        state.splice(active.idx, 1)  
        console.log(state) 
        return state;
    } else {
        return state
    }   
}
function feel (state=[], active) {
    if (active.type === 'feelIn') {
        state[active.ind] ? state[active.ind] : state[active.ind] = []
        state[active.ind].push(active.val)
        console.log(state) 
        return state;       
    } else if (active.type === 'feelDe') {
        let idx = null;
        state[active.ind].forEach((val, i) => {
            if(val === active.val){
                idx = i;
            }
        });
        state[active.ind].splice(active.idx, 1)  
        console.log(state[active.ind])
        return state;
    } else {
        return state
    }   
}
function goodlist (state=0, active) {
    if (active.type === 'case') {     
        data[active.type][active.id-1].cls = 'clsPink'
        return state
    }
    return state;
}

export default combineReducers({
    count,
    food,
    dislike,
    feel
})