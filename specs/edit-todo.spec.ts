import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { todoTestData }  from '../pages/testData'
import { EditTodo } from '../pages/edit-todo';


test('@positive Add To Do', async({page})=>{
  
  const todoPage = new TodoPage(page);
  const editTodo = new EditTodo(page);

  await editTodo.goto();
  await todoPage.addToDoItem(todoTestData.title, todoTestData.description);
  const toDoItemList = await todoPage.takeToDoListFromLocalStore(page);
  expect(toDoItemList[0].title).toBe(todoTestData.title);
  await editTodo.editTodo(0);
  await editTodo.changeTitleDescription(todoTestData.editTitle, todoTestData.editDescription);
  const editedToDoItemList = await todoPage.takeToDoListFromLocalStore(page);
  expect(editedToDoItemList[0].title).toBe(todoTestData.editTitle);


})