import { createStore } from 'redux'
import render from './state'
console.log(render)

let store = createStore(render)

store.subscribe
export default store