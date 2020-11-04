import { ADD_TODO, TOGGLE_TODO} from '../constants'

let nextTodoId = 1;

export interface IAddTodoAction {
    id: number;
    text: string;
    type: ADD_TODO;
}

export interface IToggleTodoAction {
    id: number;
    type: TOGGLE_TODO;
}
export type TodoAction = IAddTodoAction | IToggleTodoAction;

export const addTodo = (text: string) : IAddTodoAction => ({
    id: nextTodoId++,
    text,
    type: ADD_TODO
})

export const toggleTodo = (id: number): IToggleTodoAction => (
    {
        id,
        type: TOGGLE_TODO
    }
)