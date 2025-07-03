import { test, expect } from '@playwright/test';
import { DeleteTodo } from '../pages/deleteTodo';
import { TodoPage } from '../pages/TodoPage';
import { todoTestData }  from '../pages/testData'


test('delete Todo', async({page})=>{
    const deleteTodo = new DeleteTodo(page)
    const todoPage = new TodoPage(page)

    await deleteTodo.goto();
    await todoPage.addToDoItem(todoTestData.title, todoTestData.description);
    const toDoItemList = await todoPage.takeToDoListFromLocalStore(page);
    expect(toDoItemList[0].title).toBe(todoTestData.title);
    await deleteTodo.deleteTodo(0);
    const updatedList = await todoPage.takeToDoListFromLocalStore(page);
    expect(updatedList.length).toBe(0);

});