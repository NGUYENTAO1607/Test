import React, { useState, useEffect } from 'react';
import './App.scss';
import ColorBox from './components/Color';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend !' },
    { id: 2, title: 'I like Easy Frontend !' },
    { id: 3, title: 'I am Easy Frontend !' },
  ])
  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
        const response = await fetch(requestUrl);
        const responseJSON = await response.json()
        console.log({ responseJSON })
        const { data } = responseJSON;
        setPostList(data)
      } catch (error) {
        console.log('failed', error.message)
      }

    }
    console.log('pOST LIST EFFECT')
    fetchPostList()
  }, [])
  useEffect(() => {
    console.log('Todo list effect')
  })

  function handlePageChange(newPage) {
    console.log("New Page : ", newPage)
  }

  function handleTodoClick(todo) {
    // console.log(todo)
    const index = todoList.findIndex(x => x.id === todo.id)
    if (index < 0) return
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  function handleTodoFormSubmit(formValues) {
    // console.log('form submit : ', formValues)
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      {/* <ColorBox></ColorBox> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList> */}
      <PostList posts={postList}></PostList>
      <Pagination paginatio={pagination} onPageChange={handlePageChange} ></Pagination>
    </div>
  );
}

export default App;
