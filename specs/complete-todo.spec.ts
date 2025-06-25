import { test, expect } from '@playwright/test';
import { CompletedPage } from '../pages/complete-todo';
import { TodoPage } from '../pages/TodoPage';
import { todoTestData }  from '../pages/testData';


test('@positive Complete To Do', async({page})=>{

    const completedTodo = new CompletedPage(page);
    const todoPage = new TodoPage(page);
    await completedTodo.goto();
    await todoPage.addToDoItem(todoTestData.title, todoTestData.description);
    await completedTodo.completeTodo();
    await completedTodo.goToCompleteTodo();
    const completedItem = await completedTodo.getCompletedItem(0);
    await expect(completedItem).toContainText(todoTestData.title);
})