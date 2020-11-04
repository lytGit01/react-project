import * as React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

// 引入 container 组件 CountCon
// import AddTodo from './store/container/addTodo';
// import TodoList from './store/container/visibleTodoList'
import Header from './page/header';

import Content from './page/content'

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Content/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
