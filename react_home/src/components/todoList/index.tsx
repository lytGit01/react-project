import * as React from 'react';
import { Todo as TodoClass } from '../../store/types';

interface IQwe {
  todos: TodoClass[]
}

const List = ({ todos } : IQwe ) => (
  <ul>
    {
      todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))
    }
  </ul>
)

export default List;